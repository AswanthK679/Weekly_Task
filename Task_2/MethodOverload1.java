//Method overloading - different no. of arguments
class Adder{
    static int add(int a, int b){
        return a+b;
    }

    static int add(int a,int b,int c){
        return a+b+c;
    }
}

class MethodOverload1{
    public static void main(String args[ ]){
        System.out.println(Adder.add(11,22));
        System.out.println(Adder.add(11,22,33));
    }
}
//End of the program
