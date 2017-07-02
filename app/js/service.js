angular
    .module("myBlog", [])
    .service('messagesService', my)

function messagesService(){
    $scope.arrayMessages = [
      {
        title: "Atomic Classification",
        message: "Hello, Black Mirror-ish version of yourself. Welcome to your new job! Many are nervous during their first day at work, but don’t worry. It’s easy, and with minimal effort you will excel at your new career. You’ve obviously found your workstation. Your job is to sit here and wait for a badge or notification to appear. When it does, you’ll hear a beep or a ding, letting you know that it’s time to get to work. Quickly type whatever message, accept whatever invite, or install whatever update that is required to make the badge or notification disappear. That’s it. You are permitted to watch videos between notifications, but be aware that, at times, the rate of incoming notifications have been found by some to be irritating and overwhelming. You should also note that any work required to make notifications or badges disappear is inconsequential and will not have any weight during your quarterly performance review. Employees who are new to this career path may find this difficult to adjust to, but in time they complete an entire day of work with no idea whether or not they accomplished anything at all.",
        id: 0,
        date: new Date().setDate(23)
      },
      {
        title: "The Notification Machine",
        message: "Jono’s team, like many, could still find value by pushing an idea beyond its plug-and-play state. If the atoms-molecules-organisms metaphor isn’t working for your organization, you don’t have to force it. Mandy Brown on a good metaphor. No analogy holds when followed to the ends of the earth; it’s a tool whose power lies in suggestion—a fleeting kiss instead of a lifelong partnership. Design systems and pattern libraries should be designed the way we design anything else—the content itself (patterns, components and the like) should inform the classification and organization of the system as a whole. Considerations should be made for how easily an organization might adopt, understand, and iterate upon a given system. Choose names and classifications that make the most sense for the most people. It can be counter-productive if a team spends more time struggling with the analogy than designing and building the tool itself. Alla Kholmatova wrote about FutureLearn’s challenges in differentiating molecules from organisms within the context of their content/patterns.",
        id: 1,
        date: new Date().setDate(10)
      },
      {
        title: "Work Life",
        message: "It probably won’t surprise you to know that, though 90% of what I share online relates to my work, thinking about breakpoints, JS plugins, and fonts isn’t all I do. I love my family. I like science fiction movies and F1 racing. I worry about whether or not my hair is going to fall out (which probably increases the chance that it’ll actually happen). I bet you’re the same. What you share online only captures a fragment of who you are as a person. Your stream of photos, status updates, links, and posts most likely revolves around a handful of interests, and that’s what the online world knows of you. A few days ago, Joshua Blankenship expressed this really well in a couple of tweets. What I share on the web (and am known for) is mostly work-related. I love that part of my life, but it’s just one part. If I focus too much on that one aspect (Trent-the-worker) I often wonder if I, myself, am in danger of becoming a “poor substitute” in real life. Consider this crude personal examination exercise.",
        id: 2,
        date: new Date().setDate(2)
      }
    ];
}