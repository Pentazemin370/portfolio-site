export const drawCircle = (ctx, x, y, radius) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
};

export const drawBoundingRect = (ctx, bounds, padding = 0, style="black") => {
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