function startDiscussIntro() {   
    var intro = introJs();
    intro.setOption('exitOnOverlayClick', false);
    intro.setOption('exitOnEsc', false);
    intro.setOption('showStepNumbers', false);
    intro.setOption('skipLabel', '');
    intro.addSteps([
      {
        element: document.querySelectorAll('#playerDiv')[0],
        intro: "In each round, you will be assigned a randomly chosen <strong>identity (or avatar)</strong> and a <strong>threshold T</strong>. " +
               "In this example above, your avatar is <strong>Cow</strong> and your <strong>threshold T=1</strong>. " +
               "Note that, in each round, everyone will be assigned a new avatar and a new threshold. " +

               "<br><br>You can click on your avatar at any time to see your own wall.",
      },
      {
        element: document.querySelectorAll('#reward-summary')[0],
        intro: "Here you can see the earnings structure for the game.",
      },
      {
        element: document.querySelectorAll('#friendsDiv')[0],
        intro: "In each round, you will be connected to some or all of the other people in your group. " +
               "They will be called Your friends, and will be listed in this box. You will also see the thresholds of your friends here. " +
               "<br><br>You can click on your friends' avatars to see the messages you have sent to them. ",
      },
      {
        element: document.querySelectorAll('.container-network')[0],
        intro: "The network represents how people are connected in your group in a round. " +
               "The gray line between two avatars means that they are friends. " +
               "All of the five people in your group will be connected to some or all of the other people in the group. " + 
               "You (and everyone else) can observe the connections between people in your group in ‘The Network’ box. " +
               "Note that you will be assigned to a new group in each round. The shape of the network may or may not be the same in each round.",
      },
      {
        element: document.querySelectorAll('.container-groupList')[0],
        intro: "These are all the members of your group. They may or may not be included in your network. " +
               "When a player moves on to the next page and is waiting for you, it will be displayed here.  ",
      },
      {
        element: document.querySelectorAll('.message-tool')[0],
        intro: "Before making your participation decision, you will be given an opportunity to sendmessages to your friends to reveal " +
               "your intention to participate or not in the group event. You have the following two messaging options to post on the walls: " +
               "1) 'I will participate', 2) 'I will not participate'. Each player can send a message only to his/her own friends. " +
               "No one can see other players’ messages. You will view the messages sent to you by your friends in the decision part. " +
               "<br><br>Try using the messaging tool by selecting the recipient and a message (from the dropdown menu) to send a message to " +
               "your friend. You also have the option to send to 'All Friends' which means sending the message to all of your friends. " +
               "During the game, click the 'Send Message' button, to send your messages on to your friends. ",
        position: "top",
        disableInteraction: false,
        position: "right",
      },
      {
        element: document.querySelectorAll('.message-card')[0],
        intro: "You will view the messages sent to you by your friends in the decision part in this box.",
        //position: "top",
      },
      {
        element: document.querySelectorAll('#stopButton')[0],
        intro: "Once you are done with sending messages, you can click 'Next' below to proceed to the decision part. " +
               "You cannot send messages in the decision part.",
        disableInteraction: true,
      },
      {
        element: document.querySelectorAll('#stopModal-content')[0],
        intro: "You will have one last chance to review and edit your messages. " +
               "Click 'Edit' to make changes to your messages; you can change or remove existing messages or post new ones. " +
               "Click 'Continue' to proceed to the decision part. " +
               "Make sure that you send all of the messages you want before clicking 'Continue' as you cannot get back to the messaging part.",
        disableInteraction: true,
      },
      {
        element: document.querySelectorAll('.next-button')[0],
        intro: "<h5><em><strong>Please click Continue to move to the decision part.</strong></em><h5>",
      },
    ]);
    intro.onchange(function(targetElement) {   
        if (targetElement.id == 'stopModal-content') 
            { 
                $('#stopModal-content').css('display','inline-block');
            }
        if (targetElement.id == 'stopButton') 
            { 
                $('#stopModal-content').css('display','none');
            }
        });
    intro.start();
  }
  
  
  function startDecideIntro() {   
    var intro = introJs();
    intro.setOption('exitOnOverlayClick', false);
    intro.setOption('exitOnEsc', false);
    intro.setOption('showStepNumbers', false);
    intro.setOption('skipLabel', '');
    intro.addSteps([
      {
        element: document.querySelectorAll('.message-card')[0],
        intro: "In the decision part, each player can observe the messages sent to them. " +
               "You will be able to view all of the messages sent to you by your friends. " +
               "You will not be able to send or receive any more messages.",
        position: "top",
      },
      {
        element: document.querySelectorAll('#friendsDiv')[0],
        intro: "You can click on your friends avatars to view messages sent by your friends.", 
      }, 
      {
        element: document.querySelectorAll('#participate-group')[0],
        intro: "After reviewing the messages by friends,  each person in the group then must decide whether to participate or not " +
               "participate in the group event for this round. After making your participation decision for the round, a new round will start. " +
               "After you play all the rounds, at the end of the experiment, we will choose a random round and you will be paid based on the " +
               "results of that round. Because each round has the same chance of being chosen for payment, you should pay careful attention to " +
               "each round.",
      },
      {
        element: document.querySelectorAll('#help-nav')[0],
        intro: "At any time, you can view the instructions, this tour and the quiz.",
        disableInteraction: true,
      },
      {
        element: document.querySelectorAll('.next-button')[0],
        intro: "Next, you will practice with test rounds, and when you are ready, begin the game. <br/><br/><h5><em><strong>Please click 'Continue' now.</strong></em><h5/>",
      },
    ]);
     
    intro.start();
  }