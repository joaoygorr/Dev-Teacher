import turtle
import math

colors = ['red', 'yellow', 'green', 'purple', 'blue', 'orange']

screen = turtle.Screen()
turtle.bgcolor("black")

for i in range(300): 
    turtle.pencolor(colors[i%6])
    vt = i / 10 * math.pi
    y = (vt * 2 + 2) * math.sin(vt)
    x = (vt * 2 + 2) * math.cos(vt)
    turtle.goto(x, y)
screen.exitonclick()
turtle.done()
