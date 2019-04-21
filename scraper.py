from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import json

professorRatings = {}


def getRating(professorID):
    my_url = "http://www.ratemyprofessors.com/ShowRatings.jsp?tid={}".format(professorID)
    uClient = uReq(my_url)
    page_html = uClient.read()
    uClient.close()

    page_soup = soup(page_html,"html.parser")

    containers = page_soup.find("div",{"class":"grade"})
    rating = containers.text
    return rating


with open('ids.txt') as json_file:
    professors = json.load(json_file)
    for professor in sorted(professors)[:5]:
     # print("{}: {}".format(professor, professors[professor]))
     print("Parsing:",professor)
     professorRatings[professor] = getRating(professors[professor])
    # for professor in professors:
    # professorRatings[professor] = getRating(professors[professor])

with open('data.json', 'w') as outfile:
    json.dump(professorRatings, outfile)
