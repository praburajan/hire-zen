'use strict';

hireZen.factory('CandidatesStore', function() {
	var candidates = [{
		id: 1001,
        name: "Naresh Kumar",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team : "Composer",
        interviews: [
            {
                id: 5001,
                mode: 1,
                date: "10 May, 2015",
                result: 1,
                panel: [2001]
            }
        ]
	}, {
        id: 1002,
		name: "Dinesh Karthik",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team : "Workspace",
        interviews: [
            {
                id: 5001,
                mode: 1,
                date: "10 May, 2015",
                result: 1,
                panel: [2001]
            }
        ]
	}, {
        id: 1003,
		name: "Zaheer Khan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team : "Foundation Services",
        interviews: [
            {
                id: 5001,
                mode: 1,
                date: "10 May, 2015",
                result: 1,
                interviewer : 2001
            }
        ]
	}, {
        id: 1004,
		name: "Shikhar Dawan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Human Workflow",
        interviews: []
	}, {
        id: 1005,
		name: "Virender Sehwag",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Cloud OPS",
        interviews: []
	}, {
        id: 1006,
		name: "Andrea",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015",
		team: "Workspace",
        interviews: []
	}, {
        id: 1007,
		name: "Sridevi",
		team: "Foundation Services",
        interviews:[
        {
            id: 5001,
            mode: 1,
            date: "10 May, 2015",
            result: 1,
            interviewer: 2002
        }
    ]
	}, {
        id: 1008,
		name: "Salman Khan",
		team: "Composer",
        interviews: [
            {
                id: 5001,
                mode: 1,
                date: "10 May, 2015",
                result: 1,
                interviewer : 2003
            },
            {
                id: 5002,
                mode: 1,
                date: "10 May, 2015",
                result: 1,
                interviewer : 2002
            }
        ]
	}, {
        id: 1009,
		name: "Aamir Khan",
		team: "Human Workflow"
	}, {
        id: 1010,
		name: "Ranbhir Kapoor",
		team: "Workspace"
	}, {
        id: 1011,
		name: "Virath Kohli",
		team: "Composer"
	}, {
        id: 1012,
		name: "MS Dhoni",
		team: "Foundation Services"
	}, {
        id: 1013,
		name: "Trisha",
		team: "Cloud OPS"
	}, {
        id: 1014,
		name: "Michael Jackson",
		team: "Cloud OPS"
	}, {
        id: 1015,
		name: "Narendra Modi",
		team: "Human Workflow"
	}];



	var teams = ["All", "Workspace", "Composer", "Foundation Services", "Human Workflow", "Cloud OPS"];
	var statuses = ["All", "In Progress", "Offer Approval", "Offered", "Rejected"];

	var selection = {
        team : "",
        status : "",
		candidate : candidates[0]
    };


	return {
		getCandidates: function() {
			return candidates;
		},
		getTeams: function() {
			return teams;
		},
		getStatuses: function() {
			return statuses;
		},

		getSelectedCandidate : function () {
			return selection.candidate;
		},

        getSelectedTeam : function() {
            return selection.team;
        },

        getSelection : function() {
            return selection;
        },

		setSelectedCandidate : function (candidate) {
			selection.candidate = candidate;
		},

        setSelectedTeam : function(team) {
            selection.team = team == "All" ? "" : team;
        },

		getCandidate : function(id) {
			return candidates[id];
		}
	};
});