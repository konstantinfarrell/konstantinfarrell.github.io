---
title: Lets Avoid The Blame Game
layout: post
category: Opinion
exerpt: Here's a few tips I've discovered over the years that I haven't heard anyone teach in schools. 
author: Konstantin Farrell
edited: 2022-04-14
published: true
image:
image-alt:
---

# The Problem

I've been in a lot of meetings that follow a particular structure: A feature is requested, developers
agree on requirements, and the meeting ends with everyone feeling pretty good about what was accomplished.

A few weeks later theres a follow up meeting and the developer presents a proof of concept that is wildly different than what was requested.
On top of this, when asked why the final product is so much different than what was requested, the developer cites unclear requirements.

What went wrong?

Requirements were supposedly clarified during the first meeting so how is it that they were unclear?

# A Story

When I started as an engineer and was presented with a problem to solve, I felt very good about the fact that when given the problem, my mind would immediately start cranking away at a solution; An abstract structure was created to represent how I thought the mechanism would work. More specific pieces were highlighted as areas of importance in implementing the solution.  

Without asking any questions I had a great idea of how to solve the problem. 

So I would get started on the implementation and very quickly hit a wall. But because we'd already gone through the planning process I would decide that this wall was something I should either already know how to get past, or an implementation detail left up to the developer.

I cant count the number of times this happened and resulted in meetings with exhausted project managers, furious that they had to push the deadline back yet again, because what I presented to them weeks later was not what they were asking for.

I'm not sure why it took me years to see the issue was with what I was doing, but eventually I saw the problem.

# The Thought Process

I think two of the worst things you can do as a software engineer in the context of your team are 1) giving others the impression that you know something when you dont, and 2) not checking every one of your assumptions.

When you're starting out, imposter syndrome is a hard foe to deal with. And the symptoms and side effects are very obvious to industry veterans. It's even worse with veterans from other areas who switch over to software engineering, because they assume their prior expertise will help them. It wont. Building software is a beast unlike any other. And it leads to them feeling even more ashamed and embarassed than someone who is fresh to the industry.

That's why its best for companies to pair entry level engineers with seniors who have proven they are capable of checking their assumptions, and admitting when they dont know something. They can show the new engineer the humble mindset necessary to advance and succeed.

For me it took burning out at a company to the point where I no longer cared what people thought before I became comfortable telling a director "I have no idea what you're talking about or how any of that works".
The first time I did it was a tough hurdle to cross, but immediately improved my quality of life at that job. It was a completely acceptable answer and gave them more context as to what areas I could help out in, and what areas they needed to provide me with more resources before I could do anything.

After doing this a few times I came to the realization of what sort of image I was creating for myself previously.

This was a new director. It was early in our working relationship. I was curious as to why the director was suddenly asking me for insight when previous directors had always asked my manager or someone else on my team.

### By telling the director I knew something when I didn't, then later admitting that what I told them was incorrect, I was sabatoging my own credibility.

Today if an engineer tells me they know how to work with a framework, and later on I come to find out that they were using the framework for the first time, than engineer is done. I can't trust what they are telling me because they thought they could pull a fast one and learn the framework on the fly.

Don't do this.

Everyone can see through this.

You make yourself look like a fool.

If that engineer had instead told me they had never worked with the framework, but were willing to spike on learning about it for an hour before coming back to me with a better answer as to how long the task might take or whether it's even achievable, I would consider that engineer for a promotion.

The same is true of engineers who start blaming unclear requirements after the fact. In the end it doesn't matter that you thought the request was for X when really it was for Y. What matters is that time has been wasted, promises for deliverables have been broken, and credibility is potentially on the line.

I'm not talking about a situation where you have to push back because the team realized a component needs to be refactored for this feature to scale or be more extensible in the long run.

I'm talking about taking a week to build out a feature without any dialogue or clarification, thinking a product is finished and ready, and then being told to essentially redo everything.

# Dont Be A Hero

I think part of this stems from the idea that somehow if you were able to get this done right without needing to clarify, then you would be seen as a much better engineer than others. 

Most people with experience understand that this is almost never the case. In the very best case, you frustrate people because they don't have visibility into what you're doing. In the worst case, you derail other individuals that have to then clean up after you.

I worked at a company where an engineer thought it would be cool to run a database backfill script during an all hands meeting.

The script had a bug that resulted in several services going down. My team was pulled away from the meeting to put out fires. The engineer never told anyone he was running the script, and never asked for permission. The end result was a massive panic to try to bring systems back up, as well as several engineers calling for this individuals termination.

# So What SHOULD You Do?

As you experience more of the industry, the skill in development is less about your ability to write code, and more about your ability to communicate.

It takes years to build this experience and develop a second nature for knowing when assumptions may have been made. But there are a few rules of thumb and processes that can help.

System design interviews are a great resource for this. There are many youtube videos that go over how to conduct yourself during one of these. 
One of the techniques used in almost every interview when talking about requirements is reiteration of the problem.
No matter how well you think you understand the problem, you repeat back what your understanding of the problem is.

I have been asked about 20 times to build a "url shortening system" like tinyurl or bitly. This is a very well founded and well known service that many people are familiar with. Still, the first thing I always do is repeat to the interviewer what my understanding of a url shortening system is.

Repeating this back is a tiny but crucial step that allows you to clarify any assumptions you have, and also solidify the idea in a feynman-esque way. If you understand the problem, it shouldn't be hard to describe. If you cant describe it easily, you don't understand it well enough.

After this you should have a checklist of criteria that you think about when working on this problem:

- What is the scale? How many users? How many requests? Think about every aspect of scale and whether or not asking about it can clarify the request.

- What about verbs? Is this system read heavy? Write heavy?

- What about response time? What should the response look like?

These are just a few examples, and you can tell even in these questions that there are assumptions made about this system. Verbs imply network operations. Does this system talk to other components? Are HTTP verbs really applicable here?

What happens if the client or product manager asks about something you know nothing about? Well, you had better not lie.

Responding with statements like "Well my experience with X is fairly limited, if it's like Y then I can speak to how it can be used, otherwise I'd like to take some time to do a little research and get back to you." can help you gain more insight without losing the confidence of the client.

If you feel a little crazy at this point I think that's pretty normal. Questioning every thought you have is a hard and annoying habit to form. But I believe that by doing this you can avoid a lot of growing pains.