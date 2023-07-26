import re
import json
import requests
from urllib.parse import urlencode
from random import randint

SCRAPEOPS_API_KEY = '8eea4c8b-8c9b-45dc-82e9-60b5bda55d14'


def get_user_agent_list():
    response = requests.get('http://headers.scrapeops.io/v1/user-agents?api_key=' + SCRAPEOPS_API_KEY)
    json_response = response.json()
    return json_response.get('result', [])


def get_random_user_agent(user_agent_list):
    random_index = randint(0, len(user_agent_list) - 1)
    return user_agent_list[random_index]


def get_headers_list():
    response = requests.get('http://headers.scrapeops.io/v1/browser-headers?api_key=' + SCRAPEOPS_API_KEY)
    json_response = response.json()
    return json_response.get('result', [])


def get_random_header(header_list):
    random_index = randint(0, len(header_list) - 1)
    return header_list[random_index]


def get_indeed_search_url(keyword, location, offset=0):
    parameters = {"q": keyword, "l": location, "filter": 0, "start": offset}
    return "https://www.indeed.com/jobs?" + urlencode(parameters)


# Retrieve User-Agent List From ScrapeOps
user_agent_list = get_user_agent_list()
header_list = get_headers_list()

headers = get_random_header(header_list)

job_id_list = []

# Job Search Parameters
keyword_list = ['software engineer']
location_list = ['California']

# Loop Through Indeed Pages Until No More Jobs
for keyword in keyword_list:
    for location in location_list:
        for offset in range(0, 1010, 10):
            try:
                indeed_jobs_url = get_indeed_search_url(keyword, location, offset)
                response = requests.get(indeed_jobs_url, headers=headers)

                if response.status_code == 200:
                    script_tag = re.findall(r'window.mosaic.providerData\["mosaic-provider-jobcards"\]=(\{.+?\});',
                                            response.text)
                    if script_tag is not None:
                        json_blob = json.loads(script_tag[0])
                        jobs_list = json_blob['metaData']['mosaicProviderJobCardsModel']['results']
                        for index, job in enumerate(jobs_list):
                            if job.get('jobkey') is not None:
                                job_id_list.append(job.get('jobkey'))

                        # If response contains less than 10 jobs then stop pagination
                        if len(jobs_list) < 10:
                            break

            except Exception as e:
                print('Error', e)

print(job_id_list)
