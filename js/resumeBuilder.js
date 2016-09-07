// ----------------------------------------------------------------------------

// Defines object to store general bio information

	var bio = {
		"name" : "Phillip Wesley",
		"role" : "Technical Architect",
		"contacts" : {
			"mobile" : "(770) 595-6481",
			"email" : "wesleytm1@att.net",
			"github" : "PW's Github",
			"twitter" : "PW's Twitter",
			"location" : "Atlanta, GA"
		},
		"welcomeMessage" : "Hello America, how are ya?",
		"skills" : ["bark","rock","roll"],
		"biopic" : "C:/Users/Phillip/Pictures/Arizona/DSC03457.JPG",
	};

// Code used to add information from bio object to appropriate section of resume.  This and all display methods
// leverage variables defined within helper.js, replacing placeholders with data from corresponding object.
// Append or prepend to add data to the appropriate resume section per specs.
	
	bio.display = function(){
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var formattedContact = HTMLcontactGeneric.replace("%contact%",bio.contacts);
		var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);  
		var formattedskillsStart = HTMLskillsStart.replace("%data%",bio.welcomeMessage);
				
		$("#header").prepend(formattedName + formattedRole);
		$("ul").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);
		$("#header").append(formattedbioPic);
		$("#header").append(formattedwelcomeMsg);
		$("#header").append(formattedskillsStart);
 
		bio.skills.forEach(printSkill);
					
		function printSkill(skill,index)   {
			var formattedskills = HTMLskills.replace("%data%",bio.skills[index]);
			$("#header").append(formattedskills);
		}
    }

// ----------------------------------------------------------------------------
	
// Defines object to store education information

	var education = {
		"schools": [{
			"name": "Clayton State College",
			"location": "Sacramento, CA",
			"degree": "BBA",
			"majors": ["Computurer Information Systems","Internal Computer Medicine"],  // PAW change 8/16/16
			"dates": "09/15/1980 - 06/15/2007",
			"url": "URL to course info"
		}, {
			"name": "Briarwood High School",
			"location": "Cheyenne, WY",
			"degree": "GPA",
			"majors": ["Partying","Having a Good Time"],
			"dates": "09-01-1976 - 05/15/1980",
			"url": "URL2 to course info"
		}],
		"onlineCourses": [{
			"title": "Javascript Syntax",
			"school": "Udacity",
			"date": "10/15/2015 - 07/20/2016",
			"url": "test.url"
		}]
	}	

// Code used to add information from education object to appropriate section of resume.
	
	education.display = function(){
		$("#education").append(HTMLschoolStart);
		education.schools.forEach(printSchool);
		
		function printSchool(school,index)   {
			var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[index].name);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[index].degree);
			$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
			var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[index].dates);
			$(".education-entry:last").append(formattedschoolDates);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[index].location);
			$(".education-entry:last").append(formattedschoolLocation);
			for (var major in education.schools[index].majors) {
				var delimiter = ", ";
				if (major == 0) {
					var majorString = education.schools[index].majors[major];
				}
				else {
					var majorString = majorString + delimiter + education.schools[index].majors[major];
				}
			}
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%",majorString);
			$(".education-entry:last").append(formattedschoolMajor);
		}
 		
		$("#education").append(HTMLonlineClasses);
		var HTMLonlineStart = '<div class="online-entry"></div>';
		$("#education").append(HTMLonlineStart);
		education.onlineCourses.forEach(printOnlineCourse);
		
		function printOnlineCourse(course,index)   {
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[index].title); 
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[index].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[index].date);
			var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[index].url);
			$(".online-entry:last").append(formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL);  
		} 
	}

// ----------------------------------------------------------------------------	
	
// Defines object to store work history information

	var work = {
		"jobs": [{
			"employer": "AT&T",
			"title": "Principal Technical Architect",
			"location": "Atlanta, GA",
			"dates": "June 1997 - Current",
			"description": "When in the course of human events ..."
		},{
			"employer": "AT&T",
			"title": "Principal Technical Architect",
			"location": "Freeport, MS",
			"dates": "June 1997 - Current",
			"description": "When in the course of human events ..."
		}]
}

// Code used to add information from work object to appropriate section of resume.

	work.display = function(){
		work.jobs.forEach(printJob);
					
		function printJob(job,index)   {
			$("#workExperience").append(HTMLworkStart);
		
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
				
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);	
		}
	}
	
// ----------------------------------------------------------------------------

// Defines object to store project information

	var projects = {
		"projects": [{
			"title": "Project 1",
			"dates": "01/01/2008 - 01/31/2009",
			"description": "This is a silly project, but I had to do it",
			"images": [
				"C:/Users/Phillip/Pictures/Arizona/69 South To Pheonix.JPG",
				"C:/Users/Phillip/Pictures/Arizona/Apache Trail 2.JPG"
			]
		},{
			"title": "Project 2",
			"dates": "01/01/2010 - 01/31/2011",
			"description": "This is a sillier project 2 but did it",
			"images": [
				"C:/Users/Phillip/Pictures/Pics 02282014/000_0010.jpg",
				"C:/Users/Phillip/Pictures/Pics 06042011/108_0150.JPG"
			]
		}]
	}	

// Code used to add information from projects object to appropriate section of resume.
	
	projects.display = function() {
		projects.projects.forEach(printProject);
					
		function printProject(project,index)   {
			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
			$(".project-entry:last").append(formattedTitle);
			
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
			$(".project-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
			$(".project-entry:last").append(formattedDescription);
			
			if (projects.projects[index].images.length > 0) {
				projects.projects[index].images.forEach(printProjectImage);
				function printProjectImage(projectImage,index2) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[index2]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}

// ----------------------------------------------------------------------------

// Call each display method to modify DOM and add components to webpage

	bio.display();
	work.display();
	projects.display();
	education.display();
		
	$("#mapDiv").append(googleMap);
