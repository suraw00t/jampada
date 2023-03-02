def round_with_str(n):
    x = round(n,3)
    s = f"{x:.3f}"
    if s[-1]=="5":
        x += 0.005
    return round(x,2)
