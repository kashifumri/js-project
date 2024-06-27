// #include<iostream>
// using namespace std;
// int main()
// {
//     int n;
//     cout<<"enter the value of n"<<endl;
//     cin>>n;
//     for(int i=0; i<n; i++)
//     {
//         for(int j=0; j<n; j++)
//         {
//             cout<<"*";
//         }
//         cout<<endl;
//     }

// }
#include<iostream>
 using namespace std;
 int main()
 {
    int n,count=1;
    cout<<"Enter the value of n"<<endl;
    cin>>n;
    for(int i=1; i<=n; i++)
    {
        for(int j=1; j<=count; j++)
        {
            cout<<j;
        }count++;
        cout<<endl;
    }
 }