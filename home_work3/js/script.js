/* задание 1 */
let Car={
   manufacturer: "Hyundai Motor Company",
   model: "Hyundai Solaris",
   year: 2013,
   averageSpeed:75,
   showCar: function(){
      console.log("производитель: "+this.manufacturer+"; модель:" +this.model+"; год выпуска: "+this.year+"; средняя скорость: "+this.averageSpeed);
   },
   travelTime: function(a){
      let time=a/this.averageSpeed;
      if(time>=4) time+=Math.round(time/4);
      if(time<1) console.log("время в пути: "+Math.round(60*time)+" мин.");
      else {
         let frPart=Math.round(time%1*60);
         console.log("время в пути: "+(time-time%1)+" ч. "+frPart+" мин.");
      }
      
   }
}
Car.showCar();
Car.travelTime(1578);
Car.travelTime(2340);
Car.travelTime(50);
Car.travelTime(66);
console.log("----------");

/* задание 2 */
function Nod(a,b){
   if (b%a==0) return a;
   return Nod(b%a,a);
}
class Fraction{
   constructor(numerator,denominator){
      this.num=numerator;
      this.denom=denominator;
   }
   aligningFraction(){
      if(num2>denom2) {
         let wholePart=Math.round(num2/denom2);
         num2=num2-wholePart*denom2;
         return (wholePart+" "+num2+"/"+denom2);
      }
		else return (num2+"/"+denom2);
   }
   sum(a){
      let num2 = this.num * a.denom + this.denom * a.num;
		let denom2 = a.denom * this.denom;
      this.aligningFraction();
   }
   subtr(a){
      let num2 = this.num * a.denom -this.denom * a.num;
		let denom2 = a.denom * this.denom;
      this.aligningFraction();
   }
   mult(a){
      let num2 = this.num * a.num;
		let denom2 = this.denom * a.denom;
      this.aligningFraction();
   }
   div(a){
      let num2 = this.num * a.denom;
		let denom2 = this.denom * a.num;
      this.aligningFraction();
   }
   reduction(){
      let n=Nod(this.num,this.denom);
      this.num/=n;
      this.denom/=n;
      return (this.num+"/"+this.denom);
   }
}
let f1=new Fraction(3,4);
let f2=new Fraction(7,13);
console.log(f1.sum(f2));
console.log(f1.subtr(f2));
console.log(f1.mult(f2));
console.log(f1.div(f2));
let f3=new Fraction(14,35);
console.log(f3.reduction());
console.log("----------");

/* задание 3 */
class Time{
   constructor(h,min,sec){
      this.hours=h;
      this.minutes=min;
      this.seconds=sec;
   }
   showTime(){
      if(this.hours>0&&this.hours<=9) this.hours='0'+`${this.hours}`;
      if(this.minutes>0&&this.minutes<=9) this.minutes='0'+`${this.minutes}`;
      if(this.seconds>0&&this.seconds<=9) this.seconds='0'+`${this.seconds}`;
      console.log(this.hours+":"+this.minutes+":"+this.seconds);
   }
   aligningTime() {
      if (this.seconds>59){
         this.minutes+=parseInt(this.seconds/60);
         this.seconds%=60;
      }
      if (this.minutes>59){
         this.hours+=parseInt(this.minutes/60);
         this.minutes%=60;
      }
      if(this.hours>23) {
         let key=parseInt(this.hours/24);
         this.hours-=24*key;
      }
   }
   changeByNumberOfSeconds(a){
      this.seconds+=a;
      this.aligningTime();
      this.showTime();
   }
   changeByNumberOfMinutes(a){
      this.minutes+=a;
      this.aligningTime();
      this.showTime();
   }
   changeByNumberOfHours(a){
      this.hours+=a;
      this.aligningTime();
      this.showTime();
   }
}
let t1=new Time(12,35,45);
t1.showTime();
t1.changeByNumberOfSeconds(22);
t1.changeByNumberOfSeconds(3880);
let t2=new Time(4,58,11);
t2.changeByNumberOfMinutes(1346);
let t3=new Time(20,45,5);
t3.changeByNumberOfHours(13);