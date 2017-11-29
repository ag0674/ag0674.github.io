## Website Performance Optimization portfolio project
## Amber Gomez

To open the website, go to http://ag0674.github.io/optimize/
You can click on any of the hyperlinks to go to a differnt page. 
Use the back arrow on your browser to go to the previous page.

In particular, Cam's Pizzera is interactive where you can resize pizzas by dragging the slider. 

##Testing
In order to see the Page speed score, you can click here https://developers.google.com/speed/pagespeed/insights/?url=ag0674.github.io%2Foptimize&tab=mobile
I used Google Page Speed Insights. By inserting my website link, Google gives suggestions to optimize the website and performance.
Index.html has a page speed score of 92/100 on desktop and 95/100 on mobile.

In order to see the frame rates per second, I used a combination of Chrome and Firefox developer performance tools. By recording an action such as scrolling,
the developer is able to see what parts of javascript are being run, or what has to be drawn to show the page.

##Optimizations
Index.html- I combined my css stylesheets so my html file only has to grab data from one sheet. 
The pizzeria picture for Cam's Pizzeria took up quite a lot of space. 
Using http://optimizilla.com/, I compressed the image by 95% which reduced the quality, but reduced page speed that would've been used to load and resize the large image.

main.js- Under the Cam's Pizzeria hyperlink, the user is taken to pizza.html. The javascript behind it has a lot of code and there were two parts that were slowing down the website.
1) Pizza Sizer- under the function changePizzaSizes(size), I turned the for loop into a switch statement since there are only 3 sizes of pizza. Then based off the new width given by size,
all random pizzas are changed to that size in the for loop.
2) Pizza's moving in background- under the function updatePositions(), I took out all variables that can be declared outside of the for loop. A small math equation must still execute within due to the counter I am using.
