# :muscle: Workout Tracker

This application is early in development.

## Context

This application is being created using [Svelte 5](https://svelte.dev/), and [shadcn-svelte](https://www.shadcn-svelte.com/) and [more-shadcn-svelte](https://more-shadcn.noair.fun/).

I am creating this project for my personal needs when it comes to tracking exercise workouts. I have been using [Hevy](https://www.hevyapp.com/) for a few months now. While it is a good application and I recommend it, there are some issues with it:

- Variations of an exercise are considered to be completely different exercises. Although this can be beneficial, a downside to this is that it won't give you statistics of an exercise you have done that combine all the variations. For example, if you have done "bench press", "incline bench press" and "decline bench press", you can get statistics for each exercise separately. But if for example you want to track how many bench pressing exercises you have done which includes all those three variations, you cannot do this.
- It does not always have common variations of an exercise. For example, it has "pull ups" ( the 'standard' pull up) and "wide pull ups", but it does not have "neutral grip pull ups", nor "narrow pull ups". Furthermore, I tend to use rings in my calisthenics workouts, yet it does not always have exercises that use rings. For example, it has "inverted rows" but not "ring inverted rows". I t
- It does not have some movements/static holds that are common in calisthenics, such as the "planche", "frog stand", and "skin the cat". I feel that the app is in favour of weightlifting more than calisthenics.

The app also includes things that I do not need:

- The option to choose various pre-made routines. I prefer to program my own routines based on my goals and how much time I have.
- A social feature where you can share your workouts and view other people's workouts (though this can be turned off and you can set your account to private anyway).

The app does allow you to create custom exercises, essentially eliminating the 'not enough exercises/variations' issue. However, the app has a paid version, and the free version allows for only a maximum of seven custom exercises, and I need more than that. Moreover, as I have separate blocks for weightlifting and calisthenics, I need to have more than three routines, but the free version only allows for a maximum of three routines. Warm-up sets are also obtainable only in the paid version.

As a result of all this, I decided to build my own custom solution.

## Features

This application will contain the main features of any workout tracking app, namely:

- Create your own exercises, and these to a routine
- Start a routine, which will be known as a 'workout'
- During a workout, keep track of your sets and reps, and mark which sets have been completed
- A rest timer will start every time a set is complete
- You can specify the duration of the rest timer
- Rest timers are different to each exercise
- During a workout, you can edit the workout itself (e.g. edit exercises, change the ordering)
- Track your progress for the past weeks and months

This application is inspired by [Hevy](https://www.hevyapp.com/). But unlike Hevy, there will be no limit to the number of exercises or routines you can create.
