abstract class Shape {
  public abstract double calculateArea();
}

class Rectangle extends Shape {
  private double width;
  private double height;

  public Rectangle(double width, double height) {
    this.width = width;
    this.height = height;
  }

  @Override
  public double calculateArea() {
    return width * height;
  }
}

class Circle extends Shape {
  private double radius;

  public Circle(double radius) {
    this.radius = radius;
  }

  @Override
  public double calculateArea() {
    return Math.PI * radius * radius;
  }
}

class Triangle extends Shape {
  private double base;
  private double height;

  public Triangle(double base, double height) {
    this.base = base;
    this.height = height;
  }

  @Override
  public double calculateArea() {
    return 0.5 * base * height;
  }
}

class ShapeCalculator {
  public void printArea(Shape shape) {
    double area = shape.calculateArea();
    System.out.println("Area: " + area);
  }
}

public class Main {
  public static void main(String[] args) {
    ShapeCalculator calculator = new ShapeCalculator();

    Rectangle rectangle = new Rectangle(4, 5);
    Circle circle = new Circle(3);
    Triangle triangle = new Triangle(6, 8);

    calculator.printArea(rectangle);
    calculator.printArea(circle);
    calculator.printArea(triangle);
  }
}
