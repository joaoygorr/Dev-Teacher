import turtle

colors = ['red', 'yellow', 'green', 'purple']

t = turtle.Pen()
t.speed(10)
turtle.bgcolor("black")

for x in range(500):
    t.pencolor(colors[x%4])
    t.forward(2*x)
    t.left(90)
turtle.done()
