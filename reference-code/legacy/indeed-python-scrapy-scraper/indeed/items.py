# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class JobOverviewItem(scrapy.Item):
    keyword = scrapy.Field()
    location = scrapy.Field()
    page = scrapy.Field()
    position = scrapy.Field()
    company = scrapy.Field()
    jobkey = scrapy.Field()
    jobTitle = scrapy.Field()
    jobDescription = scrapy.Field()


class JobDetailedSummaryItem(scrapy.Item):
    # Meta
    keyword = scrapy.Field()
    location = scrapy.Field()
    page = scrapy.Field()
    position = scrapy.Field()
    company = scrapy.Field()
    companyRating = scrapy.Field()
    companyReviewCount = scrapy.Field()
    highlyRatedEmployer = scrapy.Field()
    jobkey = scrapy.Field()
    jobUrl = scrapy.Field()
    jobTitle = scrapy.Field()
    jobRequirements = scrapy.Field()
    jobLocationCity = scrapy.Field()
    jobLocationPostal = scrapy.Field()
    jobLocationState = scrapy.Field()
    jobLocationExtras = scrapy.Field()
    jobRemoteType = scrapy.Field()
    maxSalary = scrapy.Field()
    minSalary = scrapy.Field()
    salaryType = scrapy.Field()
    pubDate = scrapy.Field()
