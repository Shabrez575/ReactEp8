Learning: 
Class Based component:
In class based component, render() function will return some piece of jsx & display on UI.

class UsersClass extends React.Component - Here React.Component is a class i.e import from the React Package.

Why dow we write super inside class.
super(props).

Inside constructor we pass a props in the case class based component.

How we can create state variable in class based component.

Loading a class based component means you are creating instance of class.

We create state variable inside our constructor only.

We can create multiple state variable inside your class based component.

How we can update the state variable inside class based and function based component.
function based component:
// Here we are creating state variable with setcount1 function.
 const [count1,setcount1] = useState(1);
 // Here we are updating our count1 set varible using setcount1 function.
 <h3>Serial No: {count1} <button onClick={() => {
 setcount1(count1+1)
 }}>Inc empSeq fun</button></h3>

 Class based component:
 //  Here we are creating state variable with setcount1 function.
 // This is the way to create multiple state variable inside class based component.
 this.state = {
   count1: 51,
   count2: 5439,
 }
// Here we are updating our count1 set varible using this.setState function.
<h3>Serial No. :{this.state.count1} <button onClick={() => {
this.setState({
  count1:this.state.count1 + 2,
})
}}>Inc empId cls</button></h3>

---------------------------------------------
In class based component, we put our API call inside componentDidMount(){
  // this is place where we placed API calls...
  console.log("child Did Mount");
}
here only.

But in case of function based component, we put our API call inside  useEffect(() => {
    fetchData();
  }, []);

fetchData("API CALLS").

Reason to do the above case: Bcz first of all we load our component then once the component loaded basic details then we make an API call to fill the details.
So React will quickly rendered it then make an api call then render the data.

Scenario - 1.
When Userclass component will be executed then first of all constructor will call then render will call.

Scenario - 2.
If let suppose parent is also a class like about.jsx also a class it is calling child is also a class then in this scenario Parent constructor is called then Parent Render will call then child contructor then child render.

Scenario - 3.
Here we will considered componentDidMount(){

}
as well then what happen.
In this case first of all it will called parent contructor then render then it will call child constructor then child render then its child componentDidMount() then parent componentDidMount().

-----------------------------------------------

1 - Why we make an API call inside componentDidMount().

2 - How we make an API call inside class based component.

3 - React Life Cycle Diagram
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

When the component is mounted, Mounted in two phase.
1 - Render Phase 
In render phase, First of all constructor is called then the Render is called then in next phase...
2 - Commit Phase
In this phase they update the dom, Once the dom is updated then componentmount is called.
- That is why it is best place to keep the API call inside component mount.
- Render Phase is batch for each child component and commit phase is also batch for each child component.

------------------------------------------
life cycle of mounting: 
1 - First of all constructor will call with dummy data.
2 - Then our component will render with dummy data.
3 - lastly componentDidMount will call and API call will made & it will call set State function.

- Mount cycle finished when the component was rendered once with the dummy data quickly.

life cycle of updating:
When we do setState() then update phase is start i.e why we put setState() inside update cycle phase.
setState() will update the state variable now state variable is updated.when the state variable is updated then react trigger will render the function once again.
then this.state.userInfo variable is changed with updated values. The react will calculate the diff then react will update the DOM with the new values & then it will call componentDidupdate().

Conclusion: 
Step - 1: Constructor is called.
Step - 2: Render is called.(DOM is updated with dummy data)
Step - 3: ComponentDidMount() is called(We got the API calls.Once the API call is made.we have done with setState().)
Step - 4: render is called.
Step - 5: then the componentDidUpdate() is called.

Mounting means showing something on UI.
unmounting means remove something from UI.

Unmounting happens when we move from one nav to other nav tab like from About nav to contact it is called that time.