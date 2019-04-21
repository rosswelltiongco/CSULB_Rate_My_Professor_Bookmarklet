from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import json
import time


professorRatings = {}

startTime = time.time()

def getRating(professorID):
    my_url = "http://www.ratemyprofessors.com/ShowRatings.jsp?tid={}".format(professorID)
    uClient = uReq(my_url)
    page_html = uClient.read()
    uClient.close()

    page_soup = soup(page_html,"html.parser")

    containers = page_soup.find("div",{"class":"grade"})
    if (containers):
        rating = containers.text
        return rating

# Import file
with open('ids.txt') as json_file:
    professors = json.load(json_file)


# parse through all 5,000 professors
counter = 1
total = len(professors)
for professor in sorted(professors)[189:193]:
 # print("{}: {}".format(professor, professors[professor]))
 timeSince = time.time() - startTime
 print("Time: {}s | Progress: {}/{} ({})% -  Parsing: {}".format(str(timeSince)[:3],counter,total,str(counter/total)[:5],professor))
 professorRatings[professor] = getRating(professors[professor])
 counter+=1

# Store to file
with open('data.json', 'w') as outfile:
    json.dump(professorRatings, outfile)

endTime = time.time()
totalTime = endTime-startTime
print("Took {} seconds".format(totalTime))
