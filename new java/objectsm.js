object=[{bankname:"CBOI",
firstname:"kashif",
address:"Pilkhuwa",
state: "hapur",
country:"india",

course_enrolled:[],
buy_course: function (coursename){
    this.course_enrolled.push(coursename);
     
},
getcoursecount: function() {
    return `${this.firstname} has enrolled ${this.course_enrolled.length}course`; 
}
}]
//var course_enrolled=true;
object.buy_course("javascript,");

console.log(object.getcoursecount());
