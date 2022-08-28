---
title: AI reading for Nathalie
image: nebula
---

Dear Nathalie,

Instead of sending texts, I put all the links here! Hopefully it makes for a clearer and more entertaining story. And easier for you to click on the links. I also see this as a chance to convince you that my field is actually very cool, and not just a tech bro buzzword.

### Helpful reading tips.

* **Bold**: Highly recommended to read. All bolded links together will take you \~half hour to finish.
* _Italics_: Read it if you're interested, but not essential.
* Not bolded or italicized: Don't read this. Too technical and/or tangential. It's just for reference.

### The only thing you need to read basically.

After thinking for a while, I realized that there is one thorough, reputable source that matches exactly what you want.

**[State of AI report 2021](https://www.stateof.ai/2021)** by Nathan Benaich and Ian Hogarth. You should read:
* **Definitions and executive summary (slides 5-7)**
* **Section 4: Politics (slides 153-181)**
* _Section 2: Talent_
* _Section 3: Industry_

The 2022 report comes out next month and will be even more relevant, you should read that.

The only problem with this source is that it's a year outdated. Which in AI is very out of date! I'm not exaggerating. The rest of my links is just context and filling in the gaps of everything that happened this year!

### Context that may be helpful to outsiders.

With very minimal personal opinion included.

* It's worth repeating that progress is very fast. To give you some intuition, here's the state-of-the-art fake face generation from 2014-2018 (more human / higher resolution):
  * <blockquote class="twitter-tweet"><p lang="en" dir="ltr">4.5 years of GAN progress on face generation. <a href="https://t.co/kiQkuYULMC">https://t.co/kiQkuYULMC</a> <a href="https://t.co/S4aBsU536b">https://t.co/S4aBsU536b</a> <a href="https://t.co/8di6K6BxVC">https://t.co/8di6K6BxVC</a> <a href="https://t.co/UEFhewds2M">https://t.co/UEFhewds2M</a> <a href="https://t.co/s6hKQz9gLz">https://t.co/s6hKQz9gLz</a> <a href="https://t.co/F9Dkcfrq8l">pic.twitter.com/F9Dkcfrq8l</a></p>&mdash; Ian Goodfellow (@goodfellow_ian) <a href="https://twitter.com/goodfellow_ian/status/1084973596236144640?ref_src=twsrc%5Etfw">January 15, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
  * A big part of this is because of **[Moore's Law](https://www.britannica.com/technology/Moores-law)** (sorry if you already knew that, I'm not sure how much context to give). Something doubling every year -> lots of the thing (like coronavirus).
  * Takeaway is to avoid books. Even peer-reviewed papers, by the time they come out, are old news. People post new research online before (or without ever going through) review, and that's how you hear about the latest research.
* Nobody really understands why it works. This is a big contrast to other sciences, and unfortunately very few people seem to care.
  * Think of AI not like math / computer science / physics (where there are pretty reliable theories and equations), but an empirical science like biology (try things, see what happens, we can only make predictions at a high level).
  * <blockquote class="twitter-tweet"><p lang="en" dir="ltr">The elegance of ML is the elegance of biology, not the elegance of math or physics.<br><br>Simple gradient descent creates mind-boggling structure and behavior, just as evolution creates the awe inspiring complexity of nature. <a href="https://t.co/zggpNv00LC">https://t.co/zggpNv00LC</a></p>&mdash; Chris Olah (@ch402) <a href="https://twitter.com/ch402/status/1533164918886703104?ref_src=twsrc%5Etfw">June 4, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  * Some more intuition: there is a math benchmark for language models (ask a language AI math word problems(!) and see if they get it right). Just adding the words 'let's think step by step' increases accuracy from 17.7% to 78.7%??? wtf
  * <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Large Language Models are Zero-Shot Reasoners<br><br>Simply adding “Let’s think step by step” before each answer increases the accuracy on MultiArith from 17.7% to 78.7% and GSM8K from 10.4% to 40.7% with GPT-3.<a href="https://t.co/ebvxSbac1K">https://t.co/ebvxSbac1K</a> <a href="https://t.co/lpZwDTf06m">pic.twitter.com/lpZwDTf06m</a></p>&mdash; Aran Komatsuzaki (@arankomatsuzaki) <a href="https://twitter.com/arankomatsuzaki/status/1529278580189908993?ref_src=twsrc%5Etfw">May 25, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
* AI is not a well defined term.
  * People will use 'AI,' 'machine learning,' and 'model,' 'neural network,' and a bunch of other terms interchangably, the venn diagram of what people mean all overlap.
  * Don't let business people intimidate you with vocab.
  * This seems very hard for people like Henry Kissinger to understand, who by all means is a very smart guy but does not have the technical background to know what people mean when they say stuff.
  * Some words though, like 'bias' and 'attention' are terms of art and don't always have the same definition as how most people use it everyday.
  * Personal opinion speculation: real AI doesn't exist, it is just a computer being good at well-defined tasks (play chess with these rules), and we will just get better at defining vague tasks better (this is how to drive a car).
  * **[Why AI is harder than we think (read the abstract only)](https://arxiv.org/pdf/2104.12871.pdf)** _and read more sections if you're interested, this is a very accessible paper!_

### Important takeaways from the past year of AI research

* Scale. Making 'it' bigger (more computers, more time, more data) will make it wayyy better, even better than you expected! We already knew this but a lot more evidence for it this year.
  * **[The Bitter Lesson (read the whole thing)](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)** is a blog post by a really big deal professor. Everyone doing AI research will know you mean this if you ever mention 'the bitter lesson' around them.
  * AI systems are getting bigger. See **[Parameter counts in machine learning (just look at the two charts)](https://www.alignmentforum.org/posts/GzoWcYibWYwJva8aL/parameter-counts-in-machine-learning)**. Nb the y axis is a log scale! The largest model in 2010 had 100 million parameters, the largest model today has 100 trillion parameters.
  * Important systems that came out in the past year you should know the name of (and maybe read the intro paragraph of).
    * [Dalle 2](https://openai.com/dall-e-2/) (OpenAI)
      * You definitely know about this one already **[from Twitter](https://twitter.com/weirddalle?lang=en-GB)**!
      * The image at the top of this page I made with Dalle 2!
      * You can _try out a worse but public version [here](https://www.craiyon.com/)_
    * [Imagen](https://imagen.research.google/) (Google Research)
    * [Parti](https://parti.research.google/) (Google Research)
    * [VPT](https://openai.com/blog/vpt/) (OpenAI)
    * [Gato](https://www.deepmind.com/publications/a-generalist-agent) (DeepMind!)
    * [Chinchilla](https://www.deepmind.com/publications/an-empirical-analysis-of-compute-optimal-large-language-model-training) (DeepMind!)
    * [AlphaCode](https://www.deepmind.com/blog/competitive-programming-with-alphacode) (DeepMind!)
    * Can you believe that all this happened this year I'm not just spamming links, there are even more technical things I didn't link but yeah it was a huge year
* 'Foundation' models, diffusion, productionization of AI.
  * People can reuse huge AI systems for many things. Economist: **[Huge “foundation models” are turbo-charging AI progress (read the whole thing)](/assets/documents/economist_llm.pdf)**
  * It's a gold rush to use stuff like Dalle. A bunch of new startups just based on large models, that you should know the name of:
    * [Anthropic](https://www.anthropic.com/) has raised >$700 million, with only like 40 employees
    * [Inflection](https://inflection.ai/)
    * [Adept](https://www.adept.ai/)
    * [Cohere](https://cohere.ai/)
  * Geopolitics: chips are really important, people like the CHIPS act, for fun Economist how _[A look inside the factory around which the modern world turns](/assets/documents/economist_tsmc.pdf)_. TSMC a very important company! You need chips to make big models ¯\\\_(ツ)_/¯ 
  * <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Taiwan&#39;s semiconductor industry is $147 billion and equivalent to 15% of gdp. It accounts for nearly 40% of its exports and is a pillar of the island’s economy. TSMC is the world’s largest contract chipmaker, controls 90% of the market for the most advanced kind of chips. <a href="https://t.co/9CdJliMzRa">pic.twitter.com/9CdJliMzRa</a></p>&mdash; Alper Üçok (@AlperUcok) <a href="https://twitter.com/AlperUcok/status/1530880398531739648?ref_src=twsrc%5Etfw">May 29, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Extra stuff

* A new(!) book about sociotechnical impacts of AI. Eric may not let you reimburse this, probably too woke. _[Resisting AI (An Anti-fascist Approach to Artificial Intelligence)](https://bristoluniversitypressdigital.com/view/book/9781529213522/9781529213522.xml)_.
* More geopolitics book by someone technical that Eric probably will let you expense. _[AI Superpowers: China, Silicon Valley, and the New World Order](https://www.goodreads.com/book/show/38242135-ai-superpowers)_.
* I haven't read either of these but recommended by friends.
* Finally, a fun documentary about DeepMind beating the Go world champion! Very close to my heart It is not relevant other than conveying what being in this world can be like. This propaganda is really very good, and convinced me that DeepMind is scientist / research engineering / nerd paradise. _[AlphaGo documentary](https://www.youtube.com/watch?v=WXuK6gekU1Y)_.
