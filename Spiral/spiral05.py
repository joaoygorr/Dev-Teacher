import turtle

turtle.bgcolor("black")
turtle.pensize(2)
turtle.speed(150)

for i in range(50): 
    for colours in ['red', 'magenta', 'blue', 'cyan', 'green', 'yellow', 'white']: 
        turtle.color(colours)
        turtle.circle(100)
        turtle.left(10)
turtle.hideturtle()
turtle.done()