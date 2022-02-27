t=int(input())
for i in range(t):
    n,x=map(int,input().split())
    lst=list(map(int,input().split()))
    maxx=x+lst[0]
    a=x
    for j in range(len(lst)):
        a=a+lst[j]
        maxx=max(maxx,a)
        
    print(maxx)
        