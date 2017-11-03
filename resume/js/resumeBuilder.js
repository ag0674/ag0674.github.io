  var bio = {
	"name":"Amber Gomez",
	"role": "Web Developer",
	"welcomeMessage":"Welcome to my Resume!",
	"biopic":"images/profilepic.jpg",
	"skills":["HTML/CSS","Javascript","PHP", "SQL", "Databases"],
	"contacts" : {
		"mobile": "N/A",
		"email": "ag0674@att.com",
		"github": "http://ag0674.github.io/portfolio/",
		"twitter": "N/A",
		"location": "Dallas, TX"
	},
	display: function(){
		
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));

		$("#topContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile), 
		HTMLemail.replace("%data%", bio.contacts.email), 
		HTMLtwitter.replace("%data%", bio.contacts.twitter),
	    HTMLgithub.replace("%data%", bio.contacts.github),
	    HTMLlocation.replace("%data%", bio.contacts.location));
    
		$("#footerContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile),
		HTMLemail.replace("%data%", bio.contacts.email),
		HTMLtwitter.replace("%data%", bio.contacts.twitter),
	    HTMLgithub.replace("%data%", bio.contacts.github),
	    HTMLlocation.replace("%data%", bio.contacts.location));		

		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		$("#header").append(HTMLskillsStart);
		
		for (var i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
};//bio

  var work = {
	"jobs":[
		{
			"title":"Sr. Specialist- Technology Development Program (TDP)",
			"employer":"AT&T",
			"dates":"2016-Present",
			"location":"Dallas,TX",
			"description": "Automating tools and analyzing servers to assist Capacity Planners in determining if a machine needs more RAM, or forecasting utilization before disaster strikes. The work requires creating views in the True Sight Capacity Optimization (TSCO) tool using SQL, JavaScript, and databases. Supporting and facilitating the efforts of two college interns to develop in TSCO, teach them and other team members SQL advanced topics, how to install software, etc. Leading re-design of current Capacity Planning Website, migrating some content to a new Wiki. "
		},
		{
			"title":"Editor-in-Chief of TDP Newsletter",
			"employer":"AT&T",
			"dates":"2017-Present",
			"location":"Dallas,TX",
			"description": "Lead 8 staff members to publish quarterly newsletter for the TDP Program. Responsible for facilitating idea gathering, assigning and writing stories, editing drafts, and finalizing product. Published newsletters for Q1, Q2, and Q3.  Latest online at: http://woodduck.web.att.com/TDP_Newsletter/index.html"
		},
		{
			"title":"Student Technical Intern",
			"employer":"AT&T",
			"dates":"2015",
			"location":"El Paso,TX",
			"description": "Worked with a project mentor to automate the creation of virtual machines, hosts, and clusters in a cloud environment using Java. Worked with PHP and virtual machines employing Putty and Virtual Box to implement OpenStack, LXC, and Libvirt to better manage servers. Received a Six Sigma Green Belt certification."
		},
		{
			"title":"College Experience",
			"employer":"UTEP",
			"dates":"2012-15",
			"location":"El Paso,TX",
			"description": "System Analyst for senior project: small team created an aircraft analysis website for Embry Riddle.  Lead for Software Requirements Specification document, and assisted with website development. Interface Lead for database class-designed a parenting website for a customer and managed the database using SQL. "
		},
	],
	
	display:function(){

		work.jobs.forEach(function(job) {	
			$("#workExperience").append(HTMLworkStart);

 			var formattedEmployer = HTMLworkEmployer.replace ("%data%", job.employer);
 			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
 			var formattedEmployterTitle = formattedEmployer + formattedTitle;
 			$(".work-entry:last").append(formattedEmployterTitle);
			
			var formattedDates = HTMLworkDates.replace("%data%", job.dates);
			$(".work-entry:last").append(formattedDates);
			
			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			$(".work-entry:last").append(formattedLocation);
			
			var formattedDescription= HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formattedDescription);
 		});
	}
	
};//work 
  
  var project={
	  "projects":[
		{
			"title":"Project Portfolio",
			"dates":"2017",
			"description": "Udacity: Created a portfolio on github using HTML/CSS to organize all of my project work. http://ag0674.github.io/portfolio/",
			"images":["images/big-mouse.png"]
		},
		{
			"title":"Animal Trading Cards",
			"dates":"2017",
			"description": "Udacity: Created an animal trading card using HTML and CSS.",
			"images":["images/animalcard.PNG"]
		},
	],
	
	display: function(){
		project.projects.forEach(function(project) {	
			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle= HTMLprojectTitle.replace("%data%", project.title);
			$(".project-entry:last").append(formattedTitle);
			
			var formattedDates= HTMLprojectDates.replace("%data%", project.dates);
			$(".project-entry:last").append(formattedDates);
			
			var formattedDescription= HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(formattedDescription);
			
			if (project.images.length>0){
				project.images.forEach(function(image){
					var formattedImage= HTMLprojectImage.replace("%data%", image);
					$(".project-entry:last").append(formattedImage);
				});
			}
		});		
	} 
  };
 
 

 var education = {
	"schools": [
		{
			"name":"Univ of Texas at El Paso",
			"degree": "BS",
			"location":"El Paso, TX",
			"dates":"2012-15",
			"majors":["Computer Science"],
			"url": "http://www.cs.utep.edu/"
		},
		{
			"name":"El Paso Community College",
			"degree": "Associates",
			"location":"El Paso, TX",
			"dates":"2011-12",
			"majors":["Liberal Arts"],
			"url": "https://www.epcc.edu/"
		},
	 ],
	 "onlineCourses":[
		{
			"title":"Front-end Web Development Nano Degree",
			"school":"Udacity",
			"dates":"2017",
			"url":"http://www.udacity.com"
		},
	 ],
	 display: function(){
		education.schools.forEach(function(school) {	
			$("#education").append(HTMLschoolStart);
			
			var formattedName= HTMLschoolName.replace("%data%", school.name);			
			var formattedDegree= HTMLschoolDegree.replace("%data%",school.degree);
 			var formattedNameDegree = formattedName + formattedDegree;
 			$(".education-entry:last").append(formattedNameDegree);
						
			var formattedDates= HTMLschoolDates.replace("%data%", school.dates);
			$(".education-entry:last").append(formattedDates);
			
			var formattedLocation= HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry:last").append(formattedLocation);
			
			if (school.majors.length>0){
				school.majors.forEach(function(major){
					var formattedMajor= HTMLschoolMajor.replace("%data%", major);
					$(".education-entry:last").append(formattedMajor);
				});
			}
		});		
		
		$(".education-entry:last").append(HTMLonlineClasses);
		
		education.onlineCourses.forEach(function(course) {	
		
			var formattedTitle= HTMLonlineTitle.replace("%data%", course.title);
			var formattedSchool= HTMLonlineSchool.replace("%data%", course.school);
			var formattedTitleSchool= formattedTitle+formattedSchool;
 			$(".education-entry:last").append(formattedTitleSchool);
						
			var formattedDates= HTMLonlineDates.replace("%data%", course.dates);
			$(".education-entry:last").append(formattedDates);
			
			var formattedURL= HTMLonlineURL.replace("%data%", course.url);
			$(".education-entry:last").append(formattedURL);

		});	
	}
 };//education

 

var bio= Object.create(bio);
bio.display();
var work=Object.create(work);
work.display();
var project=Object.create(project);
project.display();
var education=Object.create(education);
education.display();

function locationizer(work){
	var locationArray=[];
	
	work.jobs.forEach(function(job) {	
		var newLocation=job.location;
		locationArray.push(newLocation);
	});
	return locationArray;
}

console.log(locationizer(work));
//to see map?
$("#mapDiv").append(googleMap);

//STYLEIZE by editing the CSS to make your own. javascript libraries
//make display functions
