import math
class Compound_Interest:
    def __init__(self, percentage_interest, principal,time = 0, value = 0):
        self.percentage_interest = percentage_interest
        self.time = time
        self.value = value
        self.principal = principal
        self.interest_period()
        self.interest_projection()
    def intrest_rate(self):
        return (self.percentage_interest / 100) + 1

    def interest_period(self):
        if self.time > 0:
            self.recurse(self.intrest_rate(),self.time,self.principal)
            return
        else:
            return
    def interest_projection(self):
        if self.value > 0:
            self.log_interest(self.intrest_rate(),self.value,self.principal, 1)
    def recurse(self,x,y,z):
        if y < 0:
            print(-1)
            return -1
        if y == 0:
            print("year ",y, " Intrest: ", 0)
            print("year ",y, " Returning Intrest: ", 0)
            return z
        else:
            val = self.recurse(x,y - 1,z)
            valn = val * x
            print("year ",y, " Returning Intrest: ", valn - self.principal)
            return valn
    def log_interest(self,x,y,z,count):
        while y > z:
            val = self.log_interest(x , y , z * x ,count + 1)
            print("year ",count, " Returning Intrest: ", z - self.principal)
            print("Years to return: ",count)
            return val
        return count

Compound_Interest(5,1000,0,1400)