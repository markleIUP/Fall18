//Document Initialize

$(document).ready( function () {
  $('#announcements').load('script.txt #newAnnouncement');
  $('#oldAnnouncements').load('script.txt #oldAnnouncement');
  $('#primaryTextPanel').load('script.txt #description');
  $('#menuPanel').html("<button class='button' onclick='home();'> Home</button>\
  <br><br><button class='button' onclick='expTracker();'>Experience Tracker</button>\
  <br><br><button class='button' onclick='quests()'>Quests</button>\
  <br><br><button class='button' onclick=\"window.location.href='http://writingspaces.org/sites/default/files/writing-spaces-readings-on-writing-vol-1.pdf'\">Writing Spaces, Vol. 1</button>\
  <br><br><button class='button' onclick=\"window.location.href='http://writingspaces.org/sites/default/files/writing-spaces-readings-on-writing-vol-2.pdf'\">Writing Spaces, Vol. 2</button>\
  <br><br><button class='button' onclick=\"window.location.href='https://www.iup.edu/writingcenter/'\">The IUP Writing Center</button>\
  <br><br><button class='button' onclick='achieve();'>Achievements</button>\
  <br><br><button class='button' onclick='about()'>About the Course and Contact Mr. B</button>");
});

function home() {
  $('#announcements').load('script.txt #newAnnouncement');
  $('#oldAnnouncements').load('script.txt #oldAnnouncement');
  $('#primaryTextPanel').load('script.txt #description');
}

function about() {
  $('#announcements').html('');
  $('#oldAnnouncements').html("");
  $('#primaryTextPanel').load('script.txt #aboutClass');
}

function expTracker() {
  $('#announcements').html("");
  $('#oldAnnouncements').html("");
  $('#primaryTextPanel').load("script.txt #embedGrades");
}

function quests() {
  $('#announcements').html("");
  $('#oldAnnouncements').html("");
  $('#primaryTextPanel').load("script.txt #quests");
}

function side1() {
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #sideOne");
    $('#announcements').html("");
}

function side2() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #sideTwo");
}

function side3() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #sideThree");
}

function side4() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #sideFour");
}

function side5() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #sideFive");
}

function side6() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #sideSix");
}

function side7() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #sideSeven");
}

function side8() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #sideEight");
}

function major1() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #majorOne");
}

function major2() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #majorTwo");
}
function major3() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #majorThree");
}
function major4() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #majorFour");
}
function major5() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #majorFive");
}

function epic1() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #epicOne");
}

function escort1() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #escortOne");
}

function escort2() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #escortTwo");
}

function escort3() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #escortThree");
}

function escort4() {
    $('#announcements').html("");
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #escortFour");
}

function achieve() {
    $('#announcements').html("") ;
    $('#oldAnnouncements').html("");
    $('#primaryTextPanel').load("script.txt #unlockedAchievements");
}
