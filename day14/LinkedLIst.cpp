#include<bits/stdc++.h>
using namespace std;

class Node{
    public:
    int data;
    Node*next;
    node(int val){
        data=val;
        next=NULL;
    };
};

class List{
    // privete
    Node*head;
    Node*tail;
public:
    List(){
        head = tail= NULL;
    };
    // case1: if head is Null ;
    void push_front(int val){
        Node*newNode = new Node(val);
        if(head==NULL){
            head=tail=newNode;
            return;
        }else{//case2: if head is not Null;
            newNode ->next=head;
            head=newNode;
        };
    };
};


int main(){
    List ll;
    ll.push_front(1);
    ll.push_front(2);
    ll.push_front(3);
    ll.push_front(4);

    return 0;
}