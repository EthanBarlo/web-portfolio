---
title: 'RSVP Console App'
description: 'Console application created to show my understanding of creating C# console applications.'
tags:
  - C#
  - .NET
  - Console
date: '2021-12-10'
published: true
---

<script>
  import YouTube from '$lib/components/YouTube-Video.svelte';
  import Wavy from "$lib/components/Wavy.svelte";
</script>

## Context

This was my final video submission for the 'Systems Programming' Module at Sheffield Hallam University.
Over the course of the module we made 3 different console applications, and our final submission was to improve them as much as possible.

For my submission I decided to combine all 3 of the console applications into one, and add a few features that I had not previously implemented. Such as data serialization, and a way to instantly edit any data with a single command.

<Wavy>

## Submission Video

The following video, was submitted to show changes that I made to the code to improve its efficiency, I demonstrated the changes using a useful feature in JetBrains Rider, where you can see changes visually using git.

<YouTube videoId="2Zj_BVscfXA" title="C# Console Application"/>
</Wavy>

## Challenges

For each of our assignments we were provided with a list of programs that we could choose from. Ranging from simpler programs to more complex ones that required you to use creative solutions.

I chose the hardest programs out of each selection, as I wanted to challenge myself and learn as much as possible. I found that the hardest programs were the most fun to work on, as they required me to think outside the box and come up with creative solutions.

<Wavy>

## What I learned

### Code should read like a story

As the application became larger, I started to notice that in some places the code was becoming difficult to read and follow. Because of this I extracted some of the logic into functions, and gave those functions very descriptive names. This made the code read much more like a story, and made it easier to follow.

### Dictionary's don't only store values

When creating my console 'parameter parser', I needed a way to convert the values that the user entered into the correct data type. And I wanted to ensure that this was as fast as possible.

My first idea was to use a switch statement which would have worked, however it makes it more difficult to add more data types.

The intention of this program was that other developers could download it, and then use it to parse command line arguments in their own programs. So I wanted to make it as easy as possible for them to add more data types.

After doing some research I found that you can store functions in a dictionary, and then call them using the key.

As a result of these findings I then used a dictionary to store the data types and their corresponding conversion functions.
This resulted in the code for converting being much cleaner and more readable, while also allowing any developer to add in custom data types with ease.

</Wavy>
