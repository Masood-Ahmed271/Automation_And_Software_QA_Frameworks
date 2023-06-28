from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.firefox.options import Options


options = Options()
options.add_argument('-headless')

driver = webdriver.Firefox(options=options)
driver.get("http://localhost:9323/")

# This will get the initial html - before javascript
html1 = driver.page_source    # important line for html2 to run properly

# This will get the html after on-load javascript
html2 = driver.execute_script("return document.documentElement.innerHTML;")

# print(html2)

soup = BeautifulSoup(html2, 'html.parser')
# print(soup.prettify())


# Finding the divs having test status
div_blocks = soup.find_all('div', {"class": "chip"})

# now loop through the div_blocks and find danger test status
failed_tests = []

for div in div_blocks:
    is_danger = div.find('svg', {"class": "octicon color-text-danger"})
    if is_danger:
        # find the div containing the svg with class "color-text-danger"
        danger_svg_div = div.find('div', class_='chip-header')

        # find the span containing the text you want
        text_span = danger_svg_div.find('span')

        # extract the text from the span
        text = text_span.text.strip()
        failed_tests.append(text)

print(failed_tests)