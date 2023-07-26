from itemloaders.processors import TakeFirst, SelectJmes, Compose, MapCompose, Join
from scrapy.loader import ItemLoader


class JobDetailedSummaryItemLoader(ItemLoader):
    default_output_processor = TakeFirst()
    jobUrl_in = MapCompose(lambda x: 'https://www.indeed.com' + x)
    jobRemoteType_in = MapCompose(str.lower)
    jobRequirements_out = Join(',')
