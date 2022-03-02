export const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
};

export const drawBoundingRect = (ctx: CanvasRenderingContext2D, bounds: DOMRect, padding = 0,style="black") => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.strokeStyle = style;
    ctx.fillStyle = style;
    drawCircle(ctx, bounds.left - padding, bounds.top + window.scrollY, 5);
    drawCircle(ctx, bounds.right, bounds.top - padding + window.scrollY, 5);
    drawCircle(ctx, bounds.left - padding, bounds.bottom + window.scrollY, 5);
    drawCircle(ctx, bounds.right, bounds.bottom + window.scrollY, 5);
    ctx.rect(
        bounds.x - padding,
        bounds.y - padding + window.scrollY,
        bounds.width + padding,
        bounds.height + padding
    );
    ctx.stroke();
    ctx.restore();
};