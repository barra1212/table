//will assign css class .selection to the odd numbered table rows
 $(document).ready(function(){
    $("tr:odd").addClass("selection");
  });
  
//will assign css class .selection-even to the even numbered table rows
 $(document).ready(function(){
    $("tr:even").addClass("selection-even");
  });
  