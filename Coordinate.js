class Coordinate
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.coord_para;
    }

    display()
    {
        this.coord_para = createP(this.x + ", " + this.y)
        this.coord_para.position(this.x, this.y)
        this.coord_para.style('font-family', 'arial')
        this.coord_para.style('font-size', '18px')
    }

    remove()
    {
        if (this.coord_para != null)
        {
            this.coord_para.hide()
        }
    }
}