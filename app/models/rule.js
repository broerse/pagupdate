import DS from "ember-data";

var Site = DS.Model.extend({
	Name: DS.attr('string')
});

Site.reopenClass({
FIXTURES:[
   {
      "id" : 1,
      "Name" : "Jan"
   },
   {
      "id" : 2,
      "Name" : "James"
   },
   {
      "id" : 3,
      "Name" : "John"
   },
   {
      "id" : 4,
      "Name" : "Joost"
   },
   {
      "id" : 5,
      "Name" : "Joop"
   },
   {
      "id" : 6,
      "Name" : "Justin"
   },
   {
      "id" : 7,
      "Name" : "Jean"
   },
   {
      "id" : 1,
      "Name" : "Job"
   },
]
});

export default Site;
