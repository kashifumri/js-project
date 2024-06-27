#include<iostream>
using namespace std;
int main()
{
     int count=0;
    int i,n;
    cin>>n;
    for(i=2;i<n;i++)
    {   
        if(n%i==0)
        count++;
        
    }
    if(count==0){
            cout<<"This no. is prime "<<endl;
       
        }
        else{
            cout<<"this is  not prime no.";
        }
}