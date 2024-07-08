const sets = [
    [
        {
            year: 'July 9th, 2022',
            image: './resources/images/IMG_0719.jpg',
            title: 'Official!',
            description: "The day we first started dating! Remember how awkward that conversation was baby? \"would it have been a bad idea if i had kissed you in the car !?!?\" No baby it wouldn't have been. I'm so sorryfor having no balls and being so scared to make a move. I genuinely didn't know if you liked me. Thank you for taking the leap and manning up for us."
        },
        {
            year: 'July 10th, 2022',
            image: './resources/images/IMG_0735.jpg',
            title: 'First Kiss!',
            description: "We kissed the day after we first started dating. I was in such shock when you started sticking your tongue in... but I'm not complaing. I was sooooo nervous to kiss you even though we had already made it clear we were dating??? What's wrong with me. My stomach was full of butterflies after our first kiss and I was so jittery and excited like a little kid."
        },
        {
            year: 'July 22, 2022',
            image: './resources/images/IMG_1286.jpg',
            title: 'Reunited!',
            description: "Reunited after literally like 2 weeks. Can you believe my mom actually agreed to let me come??? My first time in Oregon and staying at your house! I was so nervous to meet your mom but I think I made a good impression at first? Anyways, this week was so exciting and I'm so glad I got to spend so much time with you after we just started dating. We did so many fun and exciting activities during my time here, thank you for showing me around your hometown, love you! My favorite was going to the fair and riding all the rides with you! What was yours baby?"
        },
        {
            year: 'Aug 26, 2022',
            image: './resources/images/IMG_2243.jpg',
            title: 'Michigan Time!',
            description: "First time in Michigan together! We were apart for like 2 months which was crazy long!! I guess it was just a sneakpeak to all our long distance summers. I was so excited to see you, I had missed your touch for so freaking long. We had our ups and downs our first year at Michigan but I'm glad we stuck through with each other. Essentially living together was definitely not healthy for us but I wouldn't trade those memories of our first year dorm room and school shenanigans for anything in the world."
        }
    ],
    [
        {
            year: 'Dec 25, 2022',
            image: './resources/images/img_3874.jpg',
            title: 'First Christmas!',
            description: 'Our very first Christmas together yay! Although it was unintended, I hope I was able to make the most out of such an unlucky situation for you. Also, first time sleeping in my bed together?? Big milestone! Mom told me not to sleep in the same bed but we literally just did it anyway HAHAH. Sorry about the gift exchange thing... I enjoyed spending so much time with you and being able to take you on dates as your boyfriend for the first time in California.'
        },
        {
            year: 'Feb 14, 2023',
            image: './resources/images/img_4837.jpg',
            title: 'Valentines',
            description: "First Valentine's Day together! Yet another first thing together. I hope you enjoyed the tulip bouquet I got you! I loved taking all the silly and goofy pictures with you right next to Markley. Thank you for bringing me a rose when you picked me up, I'll cherish that memory forever my love. In the future I'm going to get you even more tulips!"
        },
        {
            year: 'Feb 27, 2023',
            image: './resources/images/img_5227.jpg',
            title: 'Chicago',
            description: "Chicago!!! Our first time travelling together and exploring somewhere new. I had sooo much fun on this trip with you and thank you for putting up with my food demands. We took so many pictures on this trip and almost half of them are at a restaurant... Anyways, we got to do so much and had so many date activities that I loved."
        },
        {
            year: 'June 8, 2023',
            image: './resources/images/img_7249.jpg',
            title: 'Oregon Part 2',
            description: "Oregon once again! I know this trip was a serious one but I'm happy that we were able to make the most out of a bad situation. Spending time with you is all I need in life. The picnic date will always be one of my favorite dates. Sitting there and being able to chat and have deep talks with one another is something that I didn't know I would enjoy but maybe thats only because it was with you. Let's do that more often baby!"
        }
    ],
    [
        {
            year: 'July 9, 2023',
            image: './resources/images/img_7743.jpg',
            title: '1 Year!',
            description: "1 FREAKING YEAR!! We've been with each other 1 entire year at this point. I'm so surprised how you haven't gotten tired of me. I was in absolute shock when you woke me up. I genuinely had zero clue that you were going to come. I was all prepared for a little virtual date night together but what happened was so much better. Thank you for the scratch book baby. I looked over it so much while making this and always tear up while going through it. I love you <3"
        },
        {
            year: 'Aug 22, 2023',
            image: './resources/images/img_8367.jpg',
            title: 'Michigan Year 2',
            description: "Anotha one. Reunited once again in Michigan. That rhymed. My baby pulled up on me with her stunning hair! It was so pretty but that salon guy is a freaking scammer. I was so happy to be able to finally be with you again. It's always so difficult during our time away from each other but that makes reuniting again feel so rewarding."
        },
        {
            year: 'Aug 30, 2023',
            image: './resources/images/img_0004.jpg',
            title: 'Daniel Caesar',
            description: "Our first concert together! You were serving cunt this day baby. Thank you for letting me tag along, I hope I didn't ruin the experience for you. The concert was amazing, bros voice was voicing. You were my personal GPS and I was the chaueffer LOL. I had a lot of fun that day and the pictures that we took together turned out so cute. More concerts on the way!"
        },
        {
            year: 'Oct 3, 2023',
            image: './resources/images/img_9698.jpg',
            title: 'Hojean',
            description: "Another concert so soon! This one was really fun, holding you and swaying to the songs, it felt oddly romantic in a packed club with sweaty college students. Maybe its the nostalgic factor of Hojean having such a memorable song for your trip in California. Once again, my baby was so pretty like always! More concert more concerts"
        }
    ],
    [
        {
            year: 'Nov 20, 2023',
            image: './resources/images/img_0080.jpg',
            title: 'Chicago Part 2',
            description: "Chicago trip once again! It's always fun to get out of bummy Michigan and explore somewhere else with you. We got to spend our Thanksgiving this time somewhere else and not in Markley eating Little Caesar's and tiny ass chicken tikka masala LMFAO. Sorry for forcing you to go to Nando's yet again, I'm literally addicted to it. We also took so many pictures. Our instagram fashion arc is on the way."
        },
        {
            year: 'Dec 31, 2023',
            image: './resources/images/img_1394.jpg',
            title: 'New Years in Oregon!',
            description: "This time I came to your place for winter break! I'm glad I did because it was so fun having an actual Christmas tree and having such a homely feeling. Thank you for all the clothes and keyboard! Also meeting your dad was so chill, I thought it would be like nerve racking but bro just yapped to me about CS and his backstory."
        },
        {
            year: 'May 23, 2024',
            image: './resources/images/img_2202.jpg',
            title: 'Oregon Yet Again!',
            description: "Back to back Oregon trips! This was pretty recent. I didn't know if I should keep NYC trip and this trip together but I thought they were pretty different. Got to see you so early in the summer this time and it felt really refreshing. We had so many fun little dates. Your mom was cheffing it up so we didn't eat out as much but I can't complain at all. That food slapped. I wish I could have some more instead of having to go out to get some random ass meal everyday."
        },
        {
            year: 'May 29, 2024',
            image: './resources/images/img_2717.jpg',
            title: 'HxT Take On NYC',
            description: "Helen and Terrance pull up on NYC! I hope this trip was fun for you baby. I had a blast exploring the city with you. Also, first time on a plane together is actually crazy. Never thought we would be flying somewhere just the two of us. We did so much and it was really exciting. I'm so sorry about all the walking, I promise I would have never made you walk so much if I could help it. I miss doing fun activities with you. When we're back in Michigan, I'm going to take you out so much more."
        }
    ]
];

let currentSet = 0;

function loadSet() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = ''; // Clear current items

    sets[currentSet].forEach(item => {
        const tlItem = document.createElement('div');
        tlItem.classList.add('tl-item');
        tlItem.innerHTML = `
            <div class="tl-bg" style="background-image: url('${item.image}')"></div>
            <div class="tl-year">
                <p class="f2 heading--sanSerif">${item.year}</p>
            </div>
            <div class="tl-content">
                <h1>${item.title}</h1>
                <p>${item.description}</p>
            </div>
        `;
        timeline.appendChild(tlItem);
    });
}

document.getElementById('load-more').addEventListener('click', function () {
    currentSet = (currentSet + 1) % sets.length;
    if (currentSet === 0) {
        document.getElementById('popup').style.display = 'block';
    } else {
        loadSet();
    }
});

document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
    loadSet();
});

// Initial load
loadSet();
