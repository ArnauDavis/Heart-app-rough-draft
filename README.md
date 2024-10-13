# Rough draft for heart monitoring app
This is a rough draft brainstorm of what the JavaScript behind an app that took in a User's age, heartRate, and some random variable 'etc', and report back based on where a user fell within preset parameters. The value of the parameters can be user inputed, or be based off of data given to us through data collected in an app.

**Tech used:** JavaScript


## How It's Made:

Where do we begin with the areYouGoodDawg function? It serves as a sophisticated sorting mechanism for users based on their age and heart rate, allowing for tailored responses that adapt to various scenarios.

First, we dive into age categorization. If the user is 10 years old or younger, we initiate our first wave of heart rate analysis. This segment of code acts as a vigilant guardian, monitoring the heart rate and categorizing it accordingly. If the heart rate is a modest 30 BPM or lower, a message appears: 'This is a low heart rate.' For those whose heart rate falls between 31 and 70 BPM, the response shifts to 'This is a middle heart rate.' However, if the heart rate skyrockets above 100 BPM, a friendly warning is issued: 'This kid needs to stop drinking soda.'

But wait, there’s more! We also have a secondary variable, etc, that introduces an independent layer of complexity. If the condition is 'normal,' the console chimes in with a reassuring message about the user's state. Conversely, if etc holds the value 'not normal,' it indicates a concerning situation, prompting the function to relay that this is when things are less than ideal.

As we progress to the next age bracket—between 11 and 20—we replicate this structured logic. Heart rate monitoring continues, with thresholds adjusted: a low heart rate is defined as 60 BPM or below, while anything from 61 to 120 BPM is deemed middle ground. Again, if the heart rate exceeds 190 BPM, our warning about excessive soda consumption resurfaces, emphasizing the need for caution.

Just like before, the etc parameter is scrutinized again, adding depth to our response based on the age range. The reassuring message for 'normal' persists, while 'not normal' continues to signify potential trouble, all while respecting the established boundaries of the age group.

As a thoughtful design choice, the function is built to accommodate future age ranges, ensuring that we can keep track of users well into their golden years, but let's be real—we probably won’t need to track anyone beyond 110.

To see it in action, we have calls like areYouGoodDawg(9, 40, 'normal'), which will seamlessly categorize a 9-year-old with a heart rate of 40 BPM as healthy. Then there's areYouGoodDawg(15, 300, 'not normal'), where the red flags wave high with that elevated heart rate, alerting us to a potentially serious situation.

In essence, this function encapsulates a well-rounded approach to health monitoring, elegantly handling user input while providing crucial feedback based on age, heart rate, and additional contextual information.


## Optimizations
Of course this is not set to react or respond to user input through a dedicated UI. A better tutorial example could be present with some simple HTML and CSS for users to input data in and see the JavaScript respond live. The conditional logic could be done more effectively as well, on top of being better organized, but it is my belief this is easier to read.


## Lessons Learned:
I learned programming a rough draft is a great way to visualize an idea and get the gears turning on how to start the process to production.
