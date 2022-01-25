# Import Turtle
import turtle 

# Definindo Cores
colors = ['red', 'yellow', 'green', 'purple', 'blue', 'orange']

# Configurando a caneta
t = turtle.Pen()

# Velocidade da caneta
t.speed(10)

# Cor de fundo
turtle.bgcolor("black")

# Espiral
for x in range(500):
    t.pencolor(colors[x%6]) # Configuração das cores
    t.width(x/100+1) # Configuração de largura
    t.forward(x) # Movendo
    t.left(59) # Movendo para a esquerda
    
turtle.done()
t.speed(10)

turtle.bgcolor("black")

for x in range(500):
    t.pencolor(colors[x%6])
    t.width(x/100+1)
    t.forward(x)
    t.left(59)

turtle.done()