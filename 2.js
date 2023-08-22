let Angle=0
let ans = []
function anglefunc()
{
  Angle = document.getElementById("angleinput").value
  document.getElementById("displayangle").
  innerHTML = Angle;
  refnum = document.getElementById("refnuminput").value
  if (refnum > 5000 ){refnum=0}
  if (refnum < -5000 ){refnum=0}
  refnum = Number(refnum)
  document.getElementById("displayrefnum").innerHTML = refnum;
  ans = []
  for(let x=0; x!=(refnum) ; x = x+((refnum)/Math.abs(refnum))) {
    Angle = Math.round(Math.atan(Math.abs(Math.tan(Angle*Math.PI/180)))*180/Math.PI)
    if ((refnum)/Math.abs(refnum) == -1 && x==0){x=-1}
    ans.push((360*x)+Angle);
    ans.push((360*x)+180-Angle);
    ans.push((360*x)+180+Angle);
    ans.push((360*x)+360-Angle);
    ans.sort( function( a , b){
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
  });
    document.getElementById("displayans").innerHTML = ans.toString();
    if (x==-1 && refnum==-1){break}
  }
}
