<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * Fillable fields for a Category
     *
     * @var array
     */

    protected $fillable = [
        'name',
        'slug'
    ];
}
