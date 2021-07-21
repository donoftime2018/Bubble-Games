class Student
{
    constructor(n, h)
    {
        this.name = n;
        this.house = h;
    }

    toString()
    {
        return this.name + " is in " + this.house
    }

    getName()
    {
        return this.name;
    }
}