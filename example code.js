function areYouGoodDawg(age,heartRate,etc){
    //Here we can sort the user based off different age ranges
    if(age <= 10){
    //Once a user is part of an age range, we can sort their details, each number would be Beats Per Minute
        //here code can execute based off of their age and heart rate
        if(heartRate <= 30){
            console.log('This is a low heartrate')
        } else if (heartRate <= 70){
            console.log('This is middle heartrate')
        } else if (heartRate > 100){
            console.log('This kid needs to stop drinking soda')
        }
        //below is another data point to reference
        if(etc == 'normal'){
            console.log('a variable independent of heart rate, but dependent on age group')
        } else if(etc =='not normal'){
            console.log('a variable independent of heart rate, but dependent on age group, this is when it is bad')
        }
        //below in the next else if, we repeat the process with a different age range and we can change the boundaries
    } else if(age <= 20 && age > 10){
        if(heartRate <= 60){
            console.log('This is a low heartrate')
        } else if (heartRate <= 120){
            console.log('This is middle heartrate')
        } else if (heartRate > 190){
            console.log('This kid needs to stop drinking soda')
        }
        //below is another data point to reference
         if(etc == 'normal'){
            console.log('a variable independent of heart rate, but dependent on age group')
        } else if(etc =='not normal'){
            console.log('a variable independent of heart rate, but dependent on age group, this is when it is bad')
        }
    }
    //from here we just keep adding age ranges until we get to like 100, unless this will make people
    //live wayyyy longer, I don't think we would have to count past 100, maybe 110 max
}


areYouGoodDawg(9,40,'normal')

areYouGoodDawg(15,300,'not normal')