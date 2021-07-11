import React, { Component } from 'react';
import './ListResources.css'

class Agenda extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
               <div id="accordion">

  <div className="card" id="ResourceCard">
    <div className="card-header" id="heading">
      <h5 className="mb-0">
        <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Books to read
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
     <p>Here are some books, on various topics, we highly recommend you check out: </p> 
     <h5>Power questions</h5>
     
     <p> This is a wonderful book if you like to question everything and everyone around you. 
Power Questions sets out a series of strategic questions that will help you win new business and dramatically deepen your professional and personal relationships. The book showcases thirty-five riveting, real conversations with CEOs, billionaires, clients, colleagues, and friends. Each story illustrates the extraordinary power and impact of a thought-provoking, incisive power question. To help readers navigate a variety of professional challenges, over 200 additional, thought-provoking questions are also summarized at the end of the book. 
</p>
<p>Written by Andrew Sobel and Jerold Panas</p>
<br></br>
<h5>Clarity: Clear Mind, Better Performance, Bigger Results</h5>  
<p> We all have so much going on. A million different projects, to-do lists longer than your arm. We all worry about things – money, deadlines. With all this buzzing around in our heads it’s often a nightmare trying to concentrate on one thing. What if someone could show you how to empty your mind of all the noise? If you could be shown how to de-clutter your mind and concentrate on one important thing? Well Jamie Smart, state-of-mind specialist, can do just that – with Clarity he will show you how to get real clarity of thought. You’ll learn how to clear your mind and become less stressed and more productive – and as a result, more confident in your abilities.</p>
<p>Written by Jamie Smart</p>
<br></br>
<h5>Keep It Moving: Lessons for the Rest of Your Life</h5>  
<p> You probably think, what does a book about dance do in this list? But this is a book for everyone who MOVES: movement is everything, not just sports. And this book will help you look at it as an integrative part of our lives, not just something we do half an hour every other day.
At seventy-eight, Twyla Tharp is revered not only for the dances she makes—but for her astounding regime of exercise and nonstop engagement. She is famed for religiously hitting the gym each morning at daybreak, and utilizing that energy to propel her breakneck schedule as a teacher, writer, creator, and lecturer. This book grew out of the question she was asked most frequently: <em>How do you keep working? </em>
This book is a series of no-nonsense mediations on how to live with purpose as time passes. From the details of how she stays motivated to the stages of her evolving fitness routine, Tharp models how fulfillment depends not on fortune—but on attitude, possible for anyone willing to try and keep trying. Culling anecdotes from Twyla’s life and the lives of other luminaries, each chapter is accompanied by a small exercise that will help anyone develop a more hopeful and energetic approach to the everyday.</p>
<p>Written by Twyla Tharp</p>


      </div>
    </div>
  </div>

  <div className="card" id="ResourceCard">
    <div className="card-header" id="heading">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Podcasts to listen to
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body">
      <p>Check out some of these podcasts while driving, walking, taking a break, working out. Or just when you need to disconnect </p>
      <h5>Emotions (French) </h5>  
      
<p> This is a podcast in French, produced by Louie Media. Once every two weeks, they go into a deep-dive on a particular emotion: why we feel it, how do we experience it, how other people experience it, how to live with it. It is usually about 30-45 min long, sometimes shorter and it’s a series of interviews and reflections. Very well documented and very well explained. You can learn about anger, joy, being in-love, deception and many other emotions</p>
<br></br>
<h5>Charles Pépin: une philosophie pratique (French) </h5>  
<p> Another French speaking podcast, this time discussing, in easy language, interesting philosophy topics. Philosophy is usually not easily accessible without prior background but this podcast takes popular concepts and discusses how to apply them to our daily lives. </p>
<br></br>
<h5>QuickRead Podcast : Free book summaries </h5>  
<p> These are 15 minutes book summaries in topics like personal development, marketing, business, health and many others. Very well summarized, and quite known and interesting books. </p>

      </div>
    </div>
  </div>
  <div className="card" id="ResourceCard">
    <div className="card-header" id="heading">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Online resources for different topics
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body">
      <p>
If you are an avid learner, reader or love to browse the Internet, here are some cool websites to check.
</p>
<p>
<a href="https://www.scribd.com">Scribd</a>: online book subscription service. You can find many books, technical documents, textbooks, articles, journals, magazines for only 11$ a month. 

</p>
<p>
<a href="https://www.modernanalyst.com/">Modern Analyst</a>: an extensive resource with articles, videos and whitepapers on latest news in business analysis practices.
</p>
<p>
<a href="https://www.guru99.com/">Guru99</a>: awesome resource with tutorials for almost EVERYTHING. Very high quality tutorials, with many resources for delving into any topic as deep as you wish.
</p>
<p>
<a href="https://www.mockaroo.com/">Mockaroo</a>: if you are a tester (backend especially) and you need to generate test data, in formats like Sql, JSON, CSV etc, then this is your website. I have used it many times during my testing and it helps generate quality data, of very different types.
</p>
<p>
<a href="https://psycatgames.com//">PsyCat Games</a>: do you need a game, an ice-breaker or just a fun thing to do at work or with your friends? This website has it all, from the most serious ones, to the most hilarious and daring ones. 
</p>


      </div>
    </div>
  </div>
</div>
            </div>
            
         );
    }
}
 
export default Agenda;