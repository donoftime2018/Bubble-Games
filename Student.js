class Student
{
    constructor(n, h)
    {
        this.name = n;
        this.house = h;
        this.namePara;
    }

    toString()
    {
        return this.name + " is in " + this.house
    }

    display(px, py)
    {
        this.namePara = createP(this.name)
        this.namePara.style('font-size', '18px')
        this.namePara.style('font-family', 'arial')
        this.namePara.style('color', 'black')
        this.namePara.position(px, py)
    }

    remove()
    {
        if (this.namePara != null)
        {
            this.namePara.hide()
        }
    }
}