//Java Program to illustrate the use of Java Method Overriding
//Creating a parent class.
class Vehicle{
    //defining a method
    void run(){
    System.out.println("Vehicle is running");
    }
}
//Creating a child class
class MethodOverriding extends Vehicle{
    //defining the same method as in the parent class
    void run(){
    System.out.println("Bike is running safely");
    }
    public static void main(String args[]){
        //creating object
        MethodOverriding  obj = new MethodOverriding ();
        //calling method
        obj.run();
    }
}
//End of the program


