public class Main {

  public interface Drawable {

    void draw();
  }

  public static class Circle implements Drawable {

    private double radius;

    public Circle(double radius) {
      this.radius = radius;
    }

    public void draw() {
      System.out.println("Drawing a circle with radius " + radius);
    }
  }

  public static class Rectangle implements Drawable {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
      this.length = length;
      this.width = width;
    }

    public void draw() {
      System.out.println("Drawing a rectangle with length " + length + " and width " + width);
    }
  }

  public static void main(String[] args) {
    Circle circle = new Circle(5.0);

    Rectangle rectangle = new Rectangle(10.0, 8.0);

    circle.draw();
    rectangle.draw();
  }
}
