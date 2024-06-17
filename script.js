document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const lyricsContainer = document.getElementById('lyricsContainer');
    const backgroundMusic = document.getElementById('backgroundMusic');

    startButton.addEventListener('click', function() {
        backgroundMusic.play();
        lyricsContainer.style.display = 'block'; 
        startButton.style.display = 'none'; 
        setTimeout(() => autoScrollLyrics(), 20000);
    });

    function autoScrollLyrics() {
        const scrollAmount = 1;
        const interval = 90;
        const scrollInterval = setInterval(() => {
            if (lyricsContainer.scrollTop < lyricsContainer.scrollHeight - lyricsContainer.clientHeight) {
                lyricsContainer.scrollBy(0, scrollAmount);
            } else {
                clearInterval(scrollInterval);
            }
        }, interval);
    }

    const fullLyrics = `Dear, Adonis
    I'm sorry that that man is your father, let me be honest
    It takes a man to be a man, your dad is not responsive
    I look at him and wish your grandpa would've wore a condom
    I'm sorry that you gotta grow up and then stand behind him
    Life is hard, I know, the challenge is always gon' beat us home
    Sometimes our parents make mistakes that affect us until we grown
    And you're a good kid that need good leadership
    Let me be your mentor since your daddy don't teach you shit
    Never let a man piss on your leg, son
    Either you die right there or pop that man in the head, son
    Never fall in the escort business, that's bad religion
    Please remember, you could be a bitch even if you got bitches
    Never code-switch, whether right or wrong, you a black man
    Even if it don't benefit your goals, do some push-ups, get some discipline
    Don't cut them corners like your daddy did, fuck what Ozempic did
    Don't pay to play with them Brazilians, get a gym membership
    Understand, no throwin' rocks and hidin' hands, that's law
    Don't be ashamed 'bout who you with, that's how he treat your moms
    Don't have a kid to hide a kid to hide again, be sure
    Five percent will comprehend, but 95 is lost
    Be proud of who you are, your strength come from within
    Lotta superstars that's real, but your daddy ain't one of them
    And you nothing like him, you'll carry yourself as king
    Can't understand me right now? Just play this when you 18
    Dear, Sandra
    Your son got some habits, I hope you don't undermine them
    Especially with all the girls that's hurt inside this climate
    You a woman, so you know how it feels to be in alignment
    With emotion, hopin' a man can see you and not be blinded
    Dear Dennis, you gave birth to a master manipulator
    Even using you to prove who he is, is a huge favor
    I think you should ask for more paper, and more paper
    And more, uh, more paper
    I'm blaming you for all his gambling addictions
    Psychopath intuition, the man that like to play victim
    You raised a horrible fucking person, the nerve of you, Dennis
    Sandra, sit down, what I'm about to say is heavy, now listen
    Mm-mm, your son's a sick man with sick thoughts, I think niggas like him should die
    Him and Weinstein should get fucked up in a cell for the rest they life
    He hates Black women, hypersexualizes 'em with kinks of a nympho fetish
    Grew facial hair because he understood bein' a beard just fit him better
    He got sex offenders on hoe-VO that he keep on a monthly allowance
    A child should never be compromised and he keepin' his child around them
    And we gotta raise our daughters knowin' there's predators like him lurkin'
    Fuck a rap battle, he should die so all of these women can live with a purpose
    I been in this industry 12 years, I'ma tell y'all one lil' secret
    It's some weird shit goin' on and some of these artists be here to police it
    They be streamlinin' victims all inside of they home and callin' 'em tender
    Then leak videos of themselves to further push their agendas
    To any woman that be playin' his music, know that you're playin' your sister
    Or better, you're sellin' your niece to the weirdos, not the good ones
    Katt Williams said, "Get you the truth, " so I'ma get mines
    The Embassy 'bout to get raided, too, it's only a matter of time
    Ayy, LeBron, keep the family away, hey, Curry, keep the family away
    To anybody that embody the love for they kids, keep the family away
    They lookin' at you too if you standin' by him, keep the family away
    I'm lookin' to shoot through any pervert that lives, keep the family safe
    Dear, baby girl
    I'm sorry that your father not active inside your world
    He don't commit to much but his music, yeah, that's for sure
    He a narcissist, misogynist, livin' inside his songs
    Try destroy families rather than takin' care of his own
    Should be teachin' you timetables or watchin' Frozen with you
    Or at your eleventh birthday singin' poems with you
    Instead, he be in Turks payin' for sex and poppin' Percs, examples that you don't deserve
    I wanna tell you that you're loved, you're brave, you're kind
    You got a gift to change the world, and could change your father's mind
    'Cause our children is the future, but he lives inside confusion
    Money's always been illusion, but that's the life he's used to
    His father prolly didn't claim him neither
    History do repeats itself, sometimes it don't need a reason
    But I would like to say it's not your fault that he's hidin' another child
    Give him grace, this the reason I made Mr. Morale
    So our babies like you can cope later
    Give you some confidence to go through somethin', it's hope later
    I never wanna hear you chase a man 'cause his failed behavior
    Sittin' in the club with sugar daddies for validation
    You need to know that love is eternity and trumps all pain
    I'll tell you who your father is, just play this song when it rains
    Yes, he's a hitmaker, songwriter, superstar, right
    And a fuckin' deadbeat that should never say "more life"
    Meet the Grahams
    Dear, Aubrey
    I know you probably thinkin' I wanted to crash your party
    But truthfully, I don't have a hatin' bone in my body
    This supposed to be a good exhibition within the game
    But you fucked up the moment you called out my family's name
    Why you had to stoop so low to discredit some decent people?
    Guess integrity is lost when the metaphors doesn't reach you
    And I like to understand 'cause your house was never a home
    37, but you showin' up as a seven-year-old
    You got gamblin' problems, drinkin' problems, pill-poppin' and spendin' problems
    Bad with money, whorehouse
    Solicitin' women problems, therapy's a lovely start
    But I suggest some ayahuasca, strip the ego from the bottom
    I try to empathize with you 'cause I know that you ain't been through nothin'
    Crave entitlement, but wanna be liked so bad that it's puzzlin'
    No dominance, let's recap moments when you didn't fit in
    No secret handshakes with your friend
    No cultural cachet to binge, just disrespectin' your mother
    Identity's on the fence, don't know which family will love ya
    The skin that you livin' in is compromised in personas
    Can't channel your masculine even when standin' next to a woman
    You a body shamer, you gon' hide them baby mamas, ain't ya?
    You embarrassed of 'em, that's not right, that ain't how mama raised us
    Take that mask off, I wanna see what's under them achievements
    Why believe you? You never gave us nothin' to believe in
    'Cause you lied about religious views, you lied about your surgery
    You lied about your accent and your past tense, all is perjury
    You lied about your ghostwriters, you lied about your crew members
    They all pussy, you lied on 'em, I know they all got you in 'em
    You lied about your son, you lied about your daughter, huh
    You lied about them other kids that's out there hopin' that you come
    You lied about the only artist that can offer you some help
    Fuck a rap battle, this a long life battle with yourself`;

    fullLyrics.split('\n').forEach(line => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'lyric-line';
        lineDiv.textContent = line;
        lyricsContainer.appendChild(lineDiv);
    });
});
