class Circle
{
    constructor(x, y, r)
    {
        this.x_coord = x
        this.y_coord = y
        this.radius = r
    }

    display()
    {
        noStroke()
        fill(random(255), random(255), random(255))
        circle(this.x_coord, this.y_coord, this.radius)
    }
}