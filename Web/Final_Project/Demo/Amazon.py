import requests
import hashlib
import hmac
import base64
from urllib.parse import quote
import time

# API Keys from your Amazon Associates account
access_key = "your-access-key"
secret_key = "your-secret-key"
associate_tag = "your-associate-tag"

# Amazon endpoint and URI
endpoint = "webservices.amazon.com"
uri = "/onca/xml"

# Parameters for the request
params = {
    "Service": "AWSECommerceService",
    "Operation": "ItemSearch",
    "SearchIndex": "All",
    "Keywords": "laptop",
    "ResponseGroup": "ItemAttributes,Offers,Images,Reviews",
    "AWSAccessKeyId": access_key,
    "AssociateTag": associate_tag,
    "Timestamp": time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
}

# Generate the signature for the request
def create_signature(params, secret_key):
    sorted_params = sorted(params.items())
    query_string = '&'.join(f"{quote(k)}={quote(v)}" for k, v in sorted_params)
    string_to_sign = f"GET\n{endpoint}\n{uri}\n{query_string}"
    signature = base64.b64encode(hmac.new(secret_key.encode('utf-8'), string_to_sign.encode('utf-8'), hashlib.sha256).digest())
    return signature

# Include the signature in the parameters
params["Signature"] = create_signature(params, secret_key)

# Send the request to Amazon Product Advertising API
response = requests.get(f"http://{endpoint}{uri}", params=params)
data = response.text  # The XML response from Amazon API

print(data)
