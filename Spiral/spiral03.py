import turtle

colors = ['red', 'yellow', 'green', 'purple'] # Para usar 3 cores no triângulo deixe só 3 cores

t = turtle.Pen()
t.speed(0) # Velocidade 
turtle.bgcolor("black")

for x in range(500):
    t.pencolor(colors[x%4]) # Para usar 3 cores no triângulo use "t.pencolor(colors[x%3])"
    t.forward(2*x)
    t.left(120) # Para formar um triângulo use "t.left(120)"
turtle.done()
