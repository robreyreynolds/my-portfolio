import json
import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):

    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:498771753159:deployPortfolioTopic')

    location = {
        "bucketName": 'portfoliobuild.robertreynolds.net',
        "objectKey": 'portfoliobuild.zip'
    }


    try:
        job = event.get("CodePipeline.job")
        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]

        print "Building portfolio from " + str(location)

        s3 = boto3.resource('s3')
        portfolio_bucket = s3.Bucket('www.robertreynolds.net')
        build_bucket = s3.Bucket(location["bucketName"])
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj(location["objectKey"],portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj,nm,
        			ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})

        print "Job done!"
        topic.publish(Subject="Portfolio deployed", Message="Portfolio deployed successfully")
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])

    except:
        print "Job failed."
		topic.publish(Subject="Portfolio Deployment Failed", Message="The Portfolio was NOT deployed successfully")
        raise


    return {
        'statusCode': 200,
        'body': json.dumps('Invoked potfolio app deployment with Lambda!')
    }
